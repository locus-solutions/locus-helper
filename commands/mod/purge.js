const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "purge",
    category: "Moderation",
    description: "Bulk deletes messages from a channel or a user.",
    aliases: [" "],
    usage: "purge [amount] or [user]",
    run: async(client, message, args, util) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) {
            return util.quickEmbed(client, message, "You do not have permission to manage messages", client.colors.red);
        }

        let member = message.mentions.members.first();
        let messages = message.channel.messages.fetch();

        /* Purge messages by member */
        if(member) {
            const userMessages = (await messages).filter((m) => m.author.id === member.id);
            await message.channel.bulkDelete(userMessages);
        } else { 
            if(!args[0]) {
                return util.quickEmbed(client, message, "You must mention a user or enter an amount of messages to clear", client.colors.accent)
            }
        }

        /* Starting checks */
        if(isNaN(args[0])) {
            return util.quickEmbed(client, message, "You must enter a number", client.colors.accent)
        }

        if(args[0] > 100 || args[0] < 1) {
            return util.quickEmbed(client, message, "You must enter a number between 1 and 100", client.colors.accent)
        }
        
        // Adding logging to moderation commands like before, not yet though because I just want to get the moderation module pushed
        try {
            message.delete()
            let toDelete = args[0];
            await message.channel.bulkDelete(toDelete, true);
        } catch {
        
        }
            

    }
}  