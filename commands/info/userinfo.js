const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "userinfo",
    category: "Info",
    description: "Shows information about a user.",
    aliases: ["whois", "ui"],
    usage: "userinfo [@user || userID]",
    cooldown: 3,
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let bot;
        if(member.user.bot) {
            bot = "Yes";
        } else {
            bot = "No";
        }
        
        let status;
        switch(member.presence.status) {
            case "online":
                status = "🟢 | Online";
                break;
            case "dnd":
                status = "🔴 | Do not Disturb";
                break;
            case "idle":
                status = "🌙 | Idle";
                break;
            case "offline":
                status = "⚫ | Offline";
                break;
        }

            const embed = new Discord.MessageEmbed()

            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setColor(client.colors.accent)
            .addField("User Information", `👤 | Name: ${member.displayName}\n🆔 | ID: ${member.user.id}\n#️⃣ | Tag: #${member.user.discriminator}`, true)
            .addField("Account Information", `📆 | Joined At: ${moment(member.joinedAt).format('LLLL')} (${moment(member.joinedAt).fromNow()})\n📆 | Created At: ${moment(member.user.createdAt).format('LLLL')} (${moment(member.user.createdAt).fromNow()})\n🤖 | Bot: ${bot}`)
            .addField("User Status", `${status}`, true)
            .addField("User Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `${roles}`).join(" | ") || "None"}`)

            await message.channel.send({
                embeds: [embed],
            })
    }
}