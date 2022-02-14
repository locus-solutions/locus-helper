const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "swag",
    category: "Fun",
    description: "How high is your swag level?",
    aliases: [" "],
    usage: "swag [@user | userID]",
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setDescription(`${member} has a swag level of **${util.randomizeNumber(0, 100)}%**`)
        .setColor(client.colors.accent);

        await message.reply({
            embeds: [embed]
        });
    }
}