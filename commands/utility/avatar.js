const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    category: "Utility",
    description: "Displays your avatar.",
    aliases: ["pfp", "av"],
    usage: "avatar [@user | userID]",
    cooldown: 3,
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()

        .setDescription(`● Link as\n[PNG](${member.user.avatarURL({ format: "png" })}) | [JPEG](${member.user.avatarURL({ format: "jpeg" })}) | [WEBP](${member.user.avatarURL({ format: "webp" })})`)
        .setColor(client.colors.accent)
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))

        await message.channel.send({
            embeds: [embed]
        })
    }
}