const chalk = require('chalk');
const ms = require('ms');

module.exports = async(client, role) => {
      console.log(chalk.grey(`${role.name} was updated in ${role.guild.name}`))
      console.log(chalk.grey(`[\n ${role.name}, ${role.hexColor}, ${role.id}\n]`))
}
