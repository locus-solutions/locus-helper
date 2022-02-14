const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "pp",
    category: "Fun",
    description: "How big is your pp?",
    aliases: [" "],
    usage: "pp [@user | userID]",
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setDescription(`${member} has **${util.randomizeNumber(0, 12)} inch cock**`)
        .setColor(client.colors.accent);

        await message.reply({
            embeds: [embed]
        });
    }
}