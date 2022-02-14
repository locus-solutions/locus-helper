const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "randcolor",
    category: "Utility",
    description: "Gives you a random color.",
    aliases: ["rc"],
    usage: "randcolor",
    run: async(client, message, args, util) => {
        let clr = '#'+Math.floor(Math.random()*16777215).toString(16);

        const embed = new MessageEmbed()

        .setDescription(clr.toUpperCase())
        .setColor(clr)

        await message.channel.send({
            embeds: [embed]
        })
    }
}