const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "serverinfo",
    category: "Info",
    description: "Shows information about the guild.",
    aliases: ["guildinfo", "si", "gi"],
    usage: "serverinfo",
    cooldown: 3,
    run: async(client, message, args, util) => {
            const embed = new Discord.MessageEmbed()

            .setThumbnail(message.guild.iconURL())
            .setColor(client.colors.accent)
            .addField("Guild Information", `š | Owner: ${await message.guild.fetchOwner()}\nš | ID: ${message.guild.id}\nš | Created At: ${moment(message.guild.createdAt).format('LLLL')} (${moment(message.guild.createdAt).fromNow()})\nš | Verification Level: ${message.guild.verificationLevel}\nš | MFA Level: ${message.guild.mfaLevel}`)

            await message.reply({
                embeds: [embed],
            })
        }

    }