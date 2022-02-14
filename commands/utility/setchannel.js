const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "setchannel",
    category: "Utility",
    description: "Set a channel for events.",
    aliases: [" "],
    usage: "setchannel <event> <channel>",
    cooldown: 30,
    userPermissions: ["MANAGE_CHANNELS"],
    run: async(client, message, args, util) => {
        if(args[0] === "suggestions") {
            let channel = message.mentions.channels.first()
            if(!channel) {
                return util.quickEmbed(client, message, "Please mention a channel", client.colors.red)
            }

            db.set(`suggestionChannel_${message.guild.id}`, channel.id)

            return util.quickEmbed(client, message, `Set the suggestion channel to ${channel}`, client.colors.green)
        } else {
            return util.quickEmbed(client, message `Please provide a valid event\n\nValid Events: \`suggestions\``, client.colors.red)
        }
    }
}