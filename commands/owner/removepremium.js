const db = require('quick.db');

module.exports = {
    name: "removepremium",
    category: "Owner",
    description: "Removes premium from a user.",
    aliases: ["rp"],
    usage: "removepremium <userID>",
    run: async(client, message, args, util) => {
        let member = client.users.cache.get(args[0])
        if(!member) {
            return util.quickEmbed(client, message, "Please provide a valid member", client.colors.red)
        }

        const isPremium = await db.fetch(`premium_${member.id}`)
        if(isPremium) {
            await db.delete(`premium_${member.id}`)
            return util.quickEmbed(client, message, `**${member.tag}** (${member.id}) no longer has premium`, client.colors.green)
        } else {
            await util.quickEmbed(client, message, `**${member.tag}** (${member.id}) does not have premium`, client.colors.red)
        }

    }
}