const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "simprate",
    category: "Fun",
    description: "How much of a simp are you?",
    aliases: ["simp"],
    usage: "simprate [@user | userID]",
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setDescription(`${member} is **${util.randomizeNumber(0, 100)}%** a simp`)
        .setColor(client.colors.accent);

        await message.reply({
            embeds: [embed]
        });
    }
}