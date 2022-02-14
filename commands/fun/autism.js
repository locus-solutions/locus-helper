const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "autism",
    category: "Fun",
    description: "How autistic are you?",
    aliases: [" "],
    usage: "autism [@user | userID]",
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setDescription(`${member} is **${util.randomizeNumber(1, 100)}% autistic**`)
        .setColor(client.colors.accent);

        await message.reply({
            embeds: [embed]
        });
    }
}