const Discord = require('discord.js');

module.exports = {
    name: "eval",
    category: "Owner",
    description: "Evaluates javascript code",
    aliases: [" "],
    usage: "eval <input>",
    ownerOnly: true,
    run: async(client, message, args, util) => {
        function clean(text) {
            if(typeof(text) === "string") {
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            } else {
                return text;
            }
        }

        try {
            args = args.join(" ");
            let evaluated = eval(args)

            if(typeof evaluated !== "string")
            evaluated = require("util").inspect(evaluated);

            const embed = new Discord.MessageEmbed()
            .setDescription(`📥 Input
\`\`\`js
${args}
\`\`\`       
📤 Output:
\`\`\`xl
${clean(evaluated)}
\`\`\``)     
            .setColor(client.colors.green)

            await message.channel.send({
                embeds: [embed],
            })
        } catch(e) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`📥 Input
\`\`\`js
${args}
\`\`\`       
📤 Output:
\`\`\`xl
${clean(e)}
\`\`\``)     
            .setColor(client.colors.red)
            await message.reply({
                embeds: [embed],
                allowedMentions: {
                    repliedUser: false
                }
            })
        }
    }
}