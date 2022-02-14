const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "help",
    category: "Info",
    description: "Shows all the commands and how to use them.",
    aliases: [" "],
    usage: "help [category || command]",
    cooldown: 3,
    run: async(client, message, args, util) => {
        if(!args[0]) {
            const helpEmbed = new Discord.MessageEmbed()
            .addField("Fun", `\**${client.config.prefix}help fun\** |`, true)
            .addField("Info", `\**${client.config.prefix}help info\** |`, true)
            .addField("Suggestions", `\**${client.config.prefix}help suggestions\** |`, true)
            .addField("Utility", `\**${client.config.prefix}help utility\**`, true)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(client.colors.accent)


            await message.reply({
                embeds: [helpEmbed],
                allowedMentions: {
                    repliedUser: false
                }
            })
        } else {
            const categories = fs.readdirSync('./commands/');
            const category = categories.filter(c => c === args[0].toLowerCase()).join("");
            if(category) {
                const commands = client.commands.filter(c => c.category.toLowerCase() === category.toLowerCase()).map(cmd => `\`${cmd.name}\``).join(", ")
                const cmdsEmbed = new Discord.MessageEmbed()
                .setTitle(`${category.slice(0, 1).toUpperCase()}${category.slice(1)} Commands`)
                .setDescription(commands)
                .setColor(client.colors.accent)

                return message.reply({
                    embeds: [cmdsEmbed],
                    allowedMentions: {
                        repliedUser: false
                    }
                })
            } else if(client.commands.has(args[0].toLowerCase())) {
                const cmd = client.commands.get(args[0].toLowerCase())
                const cmdEmbed = new Discord.MessageEmbed()
                .setTitle(`${cmd.name.slice(0, 1).toUpperCase()}${cmd.name.slice(1).toLowerCase()}`)
                .addField("Command Information", `Name: \`${cmd.name || "-"}\`\nAliases: \`${cmd.aliases.join(", ") || "-"}\`\nDescription: \`${cmd.description || "-"}\`\nCategory: \`${cmd.category || "-"}\``)
                .addField("Command Utility", `Usage: \`${cmd.usage || "-"}\`\nCooldown: \`${cmd.cooldown || "0"}s\``)
                .setColor(client.colors.accent)


                return message.reply({
                    embeds: [cmdEmbed],
                    allowedMentions: {
                        repliedUser: false
                    }
                })
            } else {
                return util.quickEmbed(client, message `I couldn't find any information for \`${args[0].toLowerCase()}\``, client.colors.red)
            }
        }
    }
}