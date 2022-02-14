const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "say",
    category: "Utility",
    description: "Say something using the bot.",
    aliases: [""],
    usage: "say <message>",
    run: async(client, message, args, util) => {
        let toSay = args.join(" ");
        if(!toSay) {
            return util.quickEmbed(client, message, "Please append a message.", client.colors.red)
        }

        await message.delete();

        const embed = new MessageEmbed()

        .setDescription(toSay)
        .setColor(client.colors.accent);

        await message.channel.send({
            embeds: [embed]
        });
    }
}