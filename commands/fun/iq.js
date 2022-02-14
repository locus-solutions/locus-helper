const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "iq",
    category: "Fun",
    description: "How high is your IQ?",
    aliases: [" "],
    usage: "iq [@user | userID]",
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setDescription(`${member} has an IQ of **${util.randomizeNumber(1, 225)}**`)
        .setColor(client.colors.accent);

        await message.reply({
            embeds: [embed]
        });
    }
}