const { red } = require('color-name');
const Discord = require('discord.js');

module.exports = {
    name: "blast",
    category: "Owner",
    description: "Sends a message to the system channel of all guilds.",
    aliases: [" "],
    usage: "blast <message>",
    cooldown: 3,
    ownerOnly: true,
    run: async(client, message, args, util) => {
        const msg = args.join(" ");
        if(!msg) {
            return util.quickEmbed(client, message, "Please provide a message", client.colors.red)
        }

        client.guilds.cache.forEach(async(guild) => {
            try {
                const embed = new Discord.MessageEmbed()

                .setThumbnail(guild.iconURL())
                .setDescription(msg)
                .setColor(client.colors.red)
                .setTimestamp()
                
                await guild.systemChannel.send({
                    embeds: [embed]
                })
            } catch {
                return;
            }
        })
    }
}