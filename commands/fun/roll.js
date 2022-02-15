const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "roll",
    category: "Fun",
    description: "Roll a dice.",
    aliases: [" "],
    usage: "roll",
    run: async(client, message, args, util) => {
        const embed = new MessageEmbed()
        .setDescription(`${message.author} has rolled a **${util.randomizeNumber(0, 6)}**`)
        .setColor(client.colors.accent);

        await message.reply({
            embeds: [embed]
        });
    }
}