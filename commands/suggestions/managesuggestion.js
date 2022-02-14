const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "managesuggestion",
    category: "Suggestions",
    description: "Manage a suggestion.",
    aliases: ["mg"],
    usage: "managesuggestion <messageID>",
    cooldown: 15,
    run: async(client, message, args, util) => {
        const channel = db.fetch(`suggestionChannel_${message.guild.id}`)
        if(channel === null) {
            return util.quickEmbed(client, message, `You must set a suggestion channel first: \`;setchannel\``, client.colors.red)
        }
        if(!args[0]) {
            return util.quickEmbed(client, message, "Please provide a message ID", client.colors.red)
        }

        let accept = new MessageButton()
        .setStyle("SUCCESS")
        .setLabel("Accept")
        .setCustomID(`${message.id}accept`)
        let deny = new MessageButton()
        .setStyle("DANGER")
        .setLabel("Deny")
        .setCustomID(`${message.id}deny`)
        let row = new MessageActionRow()
        .addComponents(accept, deny)

        try {
            const suggestedEmbed = await message.guild.channels.cache.get(channel).messages.fetch(args[0])
    
            const data = suggestedEmbed.embeds[0]
    
            const suggestion = new MessageEmbed()

            .setDescription(data.description)
            .setColor(data.color)
            .addField(`${data.fields[0].name}`, `${data.fields[0].value}`, data.fields[0].inline)
    
            const msg = await message.channel.send({
                embeds: [suggestion],
                components: [row]
            })

            const filter = (i) => i.user.id === message.author.id;
            const collector = msg.createMessageComponentInteractionCollector(filter, { time: 30000 });

            collector.on("collect", async(button) => {
                if(button.customID === `${message.id}accept`) {
                    const accepted = new MessageEmbed()

                    .setDescription(data.description)
                    .setColor(client.colors.green)
                    .addField("Status: accepted", "-")

                    await suggestedEmbed.edit({
                        embeds: [accepted]
                    })
                    .then(async() => {
                        await suggestedEmbed.reactions.removeAll();
                    })

                    collector.stop();

                    button.update({
                        embeds: [accepted],
                        components: [row]
                    })

                } else if(button.customID === `${message.id}deny`) {
                    const denied = new MessageEmbed()

                    .setDescription(data.description)
                    .setColor(client.colors.red)
                    .addField("Status: denied", "-")

                    await suggestedEmbed.edit({
                        embeds: [denied]
                    })
                    .then(async() => {
                        await suggestedEmbed.reactions.removeAll();
                    })

                    collector.stop();

                    button.update({
                        embeds: [denied],
                        components: [row]
                    })
                }
            })

            collector.on("end", async() => {
                accept = new MessageButton()
                .setStyle("SUCCESS")
                .setLabel("Accept")
                .setCustomID(`${message.id}accept`)
                .setDisabled(true)
                deny = new MessageButton()
                .setStyle("DANGER")
                .setLabel("Deny")
                .setCustomID(`${message.id}deny`)
                .setDisabled(true)
                row = new MessageActionRow()
                .addComponents(accept, deny)

                const endEmbed = new MessageEmbed()

                .setDescription(data.description)
                .setColor(data.color)
                .addField(`${data.fields[0].name}`, `${data.fields[0].value}`, data.fields[0].inline)

                await msg.edit({
                    embeds: [endEmbed],
                    components: [row]
                })
            })
        } catch {
            return util.quickEmbed(client, message, "Please provide a valid message ID", client.colors.red)
        }
    }
}