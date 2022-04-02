const chalk = require('chalk');
const ms = require('ms');

module.exports = async(client, role) => {
      console.log(chalk.grey(`${role.name} was deleted in ${role.guild.name}`))
}
