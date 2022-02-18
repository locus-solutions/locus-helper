const { MessageEmbed } = require('discord.js');
const os = require('os')

module.exports = {
    name: "os",
    category: "Utility",
    description: "Displays information about OS and hardware.",
    aliases: [" "],
    usage: "os",
    run: async(client, message, args, util) => { 
          const embed = new MessageEmbed()
          .setTitle(`Hostname: ${os.hostname()}`)
          .addField("Architecture:", `${os.arch()}`, true)
          .addField("Free Memory:", `${os.freemem()}`, true)
          .addField("Version", `${os.version()}`, true)
          .addField("Uptime:", `${os.uptime()}`, true)
          .addField("Type:", `${os.type()}`, true)
          .setColor(client.colors.accent)

          await message.reply({
              embeds: [embed]
          });
    }
}