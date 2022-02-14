const { MessageEmbed } = require('discord.js');
const insulter = require('insult');

module.exports = {
    name: "insult",
    category: "Fun",
    description: "Get insulted by the bot",
    aliases: [" "],
    usage: "insult",
    run: async(client, message, args, util) => {

        const embed = new MessageEmbed()
        .setDescription(insulter.Insult())
        .setColor(client.colors.accent);

        await message.reply({
            embeds: [embed]
        });
    }
}