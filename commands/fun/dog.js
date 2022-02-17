const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "dog",
    category: "Fun",
    description: "Send random dog pictures.",
    aliases: [""],
    usage: "dog",
    run: async(client, message, args, util) => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then((data) => {
            
        const embed = new MessageEmbed()
        .setTitle("Here's a puppy for you!")
        .setURL(data.message)
        .setImage(data.message)
        .setColor(client.colors.accent)
             message.channel.send({
                embeds: [embed]
            });
        })
    }
}
