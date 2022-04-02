const chalk = require('chalk');
const ms = require('ms');

module.exports = async(client, member) => {
    if(member.user.bot === true) {
        return;
    } else {
        console.log(chalk.grey(`${member.user.username}#${member.user.discriminator} (ID: ${member.user.id}) left ${member.guild.name}`))
    }
}
