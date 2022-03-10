const { MessageEmbed } = require('discord.js');
// const fetch = require("node-fetch");
const urban = require('urban');

module.exports = {
    name: "urban",
    category: "Fun",
    description: "Send random urban dictionary definition.",
    aliases: [" "],
    usage: "urban",
    run: async(client, message, args, util) => {
        urban.random().first(function(json) {
            const embed = new MessageEmbed()
            .setTitle(json.word)
            .setURL(json.permalink)
            .setDescription(json.definition)
            .setFooter({text: json.example})
            .setColor(client.colors.accent)
                message.channel.send({
                    embeds: [embed]
                });
        });
    }
}
