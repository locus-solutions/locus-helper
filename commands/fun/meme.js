const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "meme",
    category: "Fun",
    description: "Send random memes.",
    aliases: [""],
    usage: "meme",
    run: async(client, message, args, util) => {
        fetch('https://api.nuggetdev.com/api/meme')
        .then(res => res.json())
        .then((data) => {
            
        const embed = new MessageEmbed()
        .setTitle(data.title)
        .setURL(data.url)
        .setImage(data.image)
        .setColor(client.colors.accent)
        .setFooter(`👍: ${data.upvotes} | 👎: ${data.downvotes} | 💬: ${data.comments}`)
             message.channel.send({
                embeds: [embed]
            });
        })
    }
}
