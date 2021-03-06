const Discord = require('discord.js');

module.exports = {
    name: "kick",
    category: "Moderation",
    description: "Kicks a user.",
    aliases: [" "],
    usage: "kick [@user | userID]",
    run: async(client, message, args, util) => {
            /* 
            Adding these checks solely because sometimes, people are stupid 
            Side note for anyone who actually cares about this, if you use this source I highly recommend utilizing the quickEmbed
            */

            if(!message.member.permissions.has('KICK_MEMBERS')) {
                return util.quickEmbed(client, message, "You do not have permission to kick members", client.colors.red);
            }

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            if (!member) {
                return util.quickEmbed(client, message, "You must mention a member to kick", client.colors.red);
            }
        
            if(member == message.author.id) {
                return util.quickEmbed(client, message, "You cannot kick yourself", client.colors.red);
            } 

            if(message.guild.me.roles.highest.position <= member.roles.highest.position) {
                return util.quickEmbed(client, message, "I can't kick this person as they have an equal or higher role than mine", client.colors.red)
            }

            if((message.member.roles.highest.position <= member.roles.highest.position) && message.guild.ownerID != message.author.id) {
                return util.quickEmbed(client, message, "You can't kick this person as they have an equal or higher role than yours", client.colors.red)
            }

            // Adding logging to moderation commands like before, not yet though because I just want to get the moderation module pushed
            try {
               await member.kick()
               util.quickEmbed(client, message, `${member} has been kicked`, client.colors.red)
            } catch (e) {
                return util.quickEmbed(client, message, "There was an error while trying to kick this user", client.colors.red)
            }
    }
}