const { MessageEmbed } = require('discord.js');
const newJoke = require('give-me-a-joke')

module.exports = {
    name: "dadjoke",
    category: "Fun",
    description: "Sends a dad joke.",
    aliases: ["dj"],
    usage: "dadjoke",
    run: async(client, message, args, util) => {
        newJoke.getRandomDadJoke(function(newJoke) { 

            const embed = new MessageEmbed()
            .setDescription(newJoke)
            .setColor(client.colors.accent);
    
                message.reply({
                embeds: [embed]
            })
        })
    }
}
        