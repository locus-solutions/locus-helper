const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "inspire",
    category: "Fun",
    description: "Sends an inspiring image.",
    aliases: [" "],
    usage: "inspire",
    run: async(client, message, args, util) => {
        fetch('https://inspirobot.me/api?generate=true')
        .then(res => res.text())
        .then((data) => {

         const embed = new MessageEmbed()
         .setImage(data)
         .setColor(client.colors.accent)
              message.channel.send({
                 embeds: [embed]
             });
         })
    }
}
