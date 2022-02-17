const Discord = require('discord.js');

module.exports = {
    name: "createrole",
    category: "Utility",
    description: "Creates a custom role with color and name parameters.",
    aliases: ["ar", "cr", "addrole"],
    usage: "createrole [name] [color]",
    run: async(client, message, args, util) => {
        if(!message.member.permissions.has('MANAGE_ROLES')) {
            return util.quickEmbed(client, message, "You don't have permission to create roles", client.colors.red)
        }

        let roleName = args[0];
        if(!roleName) {
            return util.quickEmbed(client, message, "You must enter a role name", client.colors.red)
        }

        let roleColor = args[1];
        if(!roleColor) {
            return util.quickEmbed(client, message, "You must add a color", client.colors.red)
        }
        
        try {
           await message.guild.roles.create({
                name: roleName,
                color: roleColor,
                reason: `Created by: ${message.author}`,
              })

            return util.quickEmbed(client, message, `${roleName} created with the color ${roleColor}`, roleColor)
        } catch (e) {
            return util.quickEmbed(client, message, `There was an error`, client.colors.red)
        }
    }
}