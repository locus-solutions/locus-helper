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
          /*
            const online = message.guild.members.cache.filter(m =>
                m.presence.stauts === 'online'
              ).size
            const idle = message.guild.members.cache.filter(m =>
                m.presence.status === 'idle'
              ).size
            const offline = message.guild.members.cache.filter(m =>
                m.presence.status === 'offline'
              ).size
            const dnd = message.guild.members.cache.filter(m =>
                m.presence.status === 'dnd'
              ).size
          */

            const embed = new Discord.MessageEmbed()

            .setThumbnail(message.guild.iconURL())
            .setColor(client.colors.accent)
            .addField("Guild Information", `👑 | Owner: ${await message.guild.fetchOwner()}\n🆔 | ID: ${message.guild.id}\n📆 | Created At: ${moment(message.guild.createdAt).format('LLLL')} (${moment(message.guild.createdAt).fromNow()})\n🔐 | Verification Level: ${message.guild.verificationLevel}\n🔏 | MFA Level: ${message.guild.mfaLevel}`)
            //.addField(`Guild Members [${message.guild.memberCount}]`, `<:online:851204442443087922> | Online: ${online}\n<:idle:851204465872207872> | Idle: ${idle}\n<:dnd:851204454698057758> | Dnd: ${dnd}\n<:offline:851204489134473267> | Offline: ${offline}`, true)
            //.addField(`Guild Channels [${message.guild.channels.cache.filter(c => c.type !== "category").size}]`, `<:text:855497705928654850> | Text: ${message.guild.channels.cache.filter(r => r.type === "text").size}\n<:voice:855497719044243466> | Voice: ${message.guild.channels.cache.filter(r => r.type === "voice").size}`, true)
    
            await message.reply({
                embeds: [embed],
            })
        }

    }