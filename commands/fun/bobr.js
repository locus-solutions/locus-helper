const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bobr",
    category: "   Bo              ",
    description: "be 🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫🦫",
    aliases: [":beaver:", "bo", "🦫"],
    usage: "bobr [@user | userID]",
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setAuthor({text: "Shout out My Nikka Beav"})
        .setDescription(`🦫🦫🦫   *🦫 * 🦫  🦫  🦫 ${member} 🦫 Bo You are This ***${util.randomizeNumber(1, 5000)}***🦫 Hi 🦫🦫🦫  🦫 🦫%  `)
        .setFooter({text: "☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️☎️"})
        .setColor("#926F5B");

        await message.reply({
            embeds: [embed]
        });
    }
}