const chalk = require('chalk');
const ms = require('ms');

module.exports = async (client, role) => {
      console.log(chalk.grey(`${role.name} was created in ${role.guild.name}`))
}
