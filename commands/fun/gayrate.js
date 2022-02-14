const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "gayrate",
    category: "Fun",
    description: "How gay are you?",
    aliases: ["gay"],
    usage: "gayrate [@user | userID]",
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setDescription(`${member} is **${util.randomizeNumber(0, 100)}%** gay`)
        .setColor(client.colors.accent)

        await message.reply({
            embeds: [embed]
        })
    }
}