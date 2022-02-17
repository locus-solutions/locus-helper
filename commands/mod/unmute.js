const Discord = require('discord.js');

module.exports = {
    name: "unmute",
    category: "Moderation",
    description: "Unmutes a user.",
    aliases: [" "],
    usage: "unmute [@user | userID]",
    run: async(client, message, args, util) => {
        if(!message.member.permissions.has('MANAGE_MEMBERS')) {
            return util.quickEmbed(client, message, "You don't have permission to unmute members", client.colors.accent)
        }

        let toUnmute = message.mentions.members.first();
        if(!toUnmute) {
            return util.quickEmbed(client, message, "You must mention a user to unmute", client.colors.accent)
        }

        if((message.member.roles.highest.position <= toUnmute.roles.highest.position) && message.guild.ownerID != message.author.id) {
            return util.quickEmbed(client, message, "You can't mute this person as they have an equal or higher role than you", client.colors.accent)
        }
        
        if(message.guild.me.roles.highest.position <= toUnmute.roles.highest.position) {
            return util.quickEmbed(client, message, "I can't mute this person as they have an equal or higher role than me", client.colors.accent)
        }

        let muteRole = message.guild.roles.cache.some(role => role.name === 'Muted');
        
        try {
            await toUnmute.roles.remove(muteRole.id)
            return util.quickEmbed(client, message, `${toUnmute} was unmuted`, client.colors.green)
        } catch (e) {
            return util.quickEmbed(client, message, `There was an error`, client.colors.red)
        }
    }
}