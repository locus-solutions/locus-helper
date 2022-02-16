const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "clientinfo",
    category: "Info",
    description: "Shows information about the bot.",
    aliases: ["botinfo", "ping"],
    usage: "clientinfo",
    cooldown: 3,
    run: async(client, message, args, util) => {
        const apiLatency = Math.round(client.ws.ping);
        const botLatency = message.createdTimestamp - message.createdTimestamp;

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        const uptime = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

        const embed = new MessageEmbed()
        .setColor(client.colors.accent)
        .addField("General", `👥 | User Count: ${client.users.cache.size}\n🏠 | Guild Count: ${client.guilds.cache.size}\n📡 | API Latency: ${apiLatency}ms\n📡 | Bot Latency: ${botLatency}ms`, true)
        .addField("Uptime", `✅ | ${uptime}`)
  

        await message.reply({
            content: null,
            embeds: [embed]
        });
    }
}