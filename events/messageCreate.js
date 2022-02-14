const Discord = require('discord.js');
const util = require('../Utils/util');
const db = require('quick.db');

const cooldowns = new Map();

module.exports = async(client, message) => {
    const money = await db.fetch(`money_${message.author.id}`)
    if(money === null) db.add(`money_${message.author.id}`, 1000)

    if(message.author.bot || !message.guild || !message.content.startsWith(client.config.prefix)) return;

    let args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(cmd.length == 0) return;
    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));

    if(command) {
        if(command.ownerOnly === true) {
            if(!client.config.owners.includes(message.author.id)) {
                return util.quickEmbed(client, message, "This command is restricted to bot owners", client.colors.red)
            }
        }

        if(command.disabled === true) {
            if(!client.config.owners.includes(message.author.id)) {
                return util.quickEmbed(client, message, "This command is temporarily disabled", client.colors.red)
            }
        }
    
        if(!message.member.permissions.has(command.userPermissions ?? [])) {
            return util.quickEmbed(client, message, `__You__ don't have permission to use this command\n\nRequired Permission: ${command.userPermissions.map((value) => `\`${value[0].toUpperCase() + value.slice(1).replace(/_/gi, " ")}\``).join(", ")}`, client.colors.red)
        }
        if(!message.guild.me.permissions.has(command.botPermissions ?? [])) {
            return util.quickEmbed(client, message, `__I__ don't have permission to use this command\n\nRequired Permission: ${command.botPermissions.map((value) => `\`${value[0].toUpperCase() + value.slice(1).replace(/_/gi, " ")}\``).join(", ")}`, client.colors.red)
        }
        
        if(!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
        }
        const curTime = Date.now();
        const timeStamp = cooldowns.get(command.name);

        let cooldown = (command.cooldown) * 1000;
        if(!command.cooldown) cooldown = 3 * 1000;
        const isPremium = await db.fetch(`premium_${message.author.id}`)
        if(isPremium) cooldown = cooldown / 2;
        if(client.config.owners.includes(message.author.id)) cooldown = 0;

        if(timeStamp.has(message.author.id)) {
            const expTime = timeStamp.get(message.author.id) + cooldown;
            if(curTime < expTime) {
                const timeLeft = (expTime - curTime) / 1000;
    
                return util.quickEmbed(client, message, `Please wait **${timeLeft.toFixed(1)}** more seconds before using this command again`, client.colors.red)
            }
        }
        timeStamp.set(message.author.id, curTime);
        setTimeout(() => timeStamp.delete(message.author.id), cooldown);

        try {
            command.run(client, message, args, util)
        } catch {
            return;
        }
    }
}