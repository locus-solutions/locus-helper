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
            .addField("Guild Information", `👑 | Owner: ${await message.guild.fetchOwner()}\n🆔 | ID: ${message.guild.id}\n📆 | Created At: ${moment(message.guild.createdAt).format('LLLL')} (${moment(message.guild.createdAt).fromNow()})\n🔐 | Verification Level: ${message.guild.verificationLevel}\n🔏 | MFA Level: ${message.guild.mfaLevel}`)

            await message.reply({
                embeds: [embed],
            })
        }

    }