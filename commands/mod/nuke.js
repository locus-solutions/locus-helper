const Discord = require('discord.js');

module.exports = {
    name: "nuke",
    category: "Moderation",
    description: "Completely clears a channel.",
    aliases: [" "],
    usage: "nuke",
    ownerOnly: true,
    run: async(client, message, args, util) => {
            let toClear = message.channel;
            let position = toClear.position
            
            // Adding logging to moderation commands like before, not yet though because I just want to get the moderation module pushed
            try {
                newChannel = await toClear.clone()
                newChannel.setPosition(position)
                toClear.delete()
                return util.quickEmbed(client, message, "Channel was cleared", client.colors.green)
            } catch (e) {
                return util.quickEmbed(client, message, "There was an error while trying clear the channel", client.colors.red)
            }
    }
}  