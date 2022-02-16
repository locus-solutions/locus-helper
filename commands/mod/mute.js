const Discord = require('discord.js');

module.exports = {
    name: "mute",
    category: "Moderation",
    description: "Mutes a user.",
    aliases: [" "],
    usage: "mute [@user | userID]",
    run: async(client, message, args, util) => {
        if(!message.member.permissions.has('MANAGE_MEMBERS')) {
            return util.quickEmbed(client, message, "You don't have permission to mute members", client.colors.accent)
        }

        let toMute = message.mentions.members.first();
        if(!toMute) {
            return util.quickEmbed(client, message, "You must mention a user to mute", client.colors.accent)
        }

        if((message.member.roles.highest.position <= toMute.roles.highest.position) && message.guild.ownerID != message.author.id) {
            return util.quickEmbed(client, message, "You can't mute this person as they have an equal or higher role than you", client.colors.accent)
        }
        
        if(message.guild.me.roles.highest.position <= toMute.roles.highest.position) {
            return util.quickEmbed(client, message, "I can't mute this person as they have an equal or higher role than me", client.colors.accent)
        }

        let muteRole = message.guild.roles.cache.find(r => r.name === "Muted")
        if(!muteRole) {
            message.guild.roles.create({
                name: 'Muted',
                color: '#808080',
                reason: 'There is no muted role',
              })

            return util.quickEmbed(client, message, "There is no \`Muted\` role, one has been created", client.colors.green)
        }

        if(toMute.roles.cache.has(muteRole)) {
            return util.quickEmbed(client, message, "User is already muted", client.colors.red)
        }
        
        try {
            await toMute.roles.add(muteRole.id)
            return util.quickEmbed(client, message, `${toMute} was muted`, client.colors.green)
        } catch (e) {
            return util.quickEmbed(client, message, `There was an error`, client.colors.red)
        }
    }
}