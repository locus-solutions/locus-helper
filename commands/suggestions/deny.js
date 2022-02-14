const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "deny",
    category: "Suggestions",
    description: "Deny a suggestion.",
    aliases: [" "],
    usage: "deny <messageID> [reason]",
    cooldown: 15,
    userPermissions: ["MANAGE_CHANNELS"],
    run: async(client, message, args, util) => {
        const channel = db.fetch(`suggestionChannel_${message.guild.id}`)
        if(channel === null) {
            return util.quickEmbed(client, message, `You must set a suggestion channel first: \`;setchannel\``, client.colors.red)
        }
        if(!args[0]) {
            return util.quickEmbed(client, message, "Please provide a message ID", client.colors.red)
        }

        try {
            const suggestedEmbed = await message.guild.channels.cache.get(channel).messages.fetch(args[0])
    
            const data = suggestedEmbed.embeds[0]
    
            const denied = new MessageEmbed()

            .setDescription(data.description)
            .setColor(client.colors.red)
            .addField("Status: denied", `${args.slice(1).join(" ") || "-"}`)
    
            await suggestedEmbed.edit({
                embeds: [denied]
            })
            .then(async() => {
                await suggestedEmbed.reactions.removeAll();
            })
            .then(async() => {
                return util.quickEmbed(client, message, `Suggestion with the ID \`${args[0]}\` has been __denied__`, client.colors.red)
            })
        } catch {
            return util.quickEmbed(client, message, "Please provide a valid message ID", client.colors.red)
        }
    }
}