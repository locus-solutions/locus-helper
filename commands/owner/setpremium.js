const db = require('quick.db');

module.exports = {
    name: "setpremium",
    category: "Owner",
    description: "Gives a user premium.",
    aliases: ["sp"],
    usage: "setpremium <userID>",
    run: async(client, message, args, util) => {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if(!member) {
            return util.quickEmbed(client, message, "Please provide a valid member", client.colors.red);
        }

        const isPremium = await db.fetch(`premium_${member.id}`)
        if(isPremium) {
            return util.quickEmbed(client, message, `**${member}** (${member.id}) already has premium`, client.colors.red);
        } else {

        await db.set(`premium_${member.id}`, true);

        await util.quickEmbed(client, message, `**${member}** (${member.id}) is now premium`, client.colors.green);
        }
    }
}