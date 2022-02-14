const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "suggest",
    category: "Suggestions",
    description: "Suggest something.",
    aliases: [" "],
    usage: "suggest <suggestion>",
    cooldown: 60,
    run: async(client, message, args, util) => {
        const channel = await db.fetch(`suggestionChannel_${message.guild.id}`)
        if(channel === null) {
            return util.quickEmbed(client, message, `You must set a suggestion channel first: \`;setchannel\``, client.colors.red)
        }
        if(!args.length) {
            return util.quickEmbed(client, message, "Please provide a suggestion", client.colors.red)
        }

        try {
            const suggested = new MessageEmbed()

            .setDescription(args.join(" "))
            .setColor(client.colors.orange)
            .setTimestamp()
            .addField("Status: awaiting approval", "-")
            client.channels.cache.get(channel).send({
                embeds: [suggested]
            })
            .then(async(m) => {
                await m.react("🔼")
                await m.react("🔽")
            })
            .then(async() => {
                return util.quickEmbed(client, message, `Your suggestion has been sent to <#${channel}>`, client.colors.red)
            })
            .catch(async() => {
                return util.quickEmbed(client, message, "__I__ don't have permission to send messages in the suggestion channel", client.colors.red)
            })
        } catch {
            return util.quickEmbed(client, message, "There was an error, please try again", client.colors.red)
        }

        
    }
}