const chalk = require('chalk');
const ms = require('ms');

module.exports = async (client, ban) => {
      console.log(chalk.grey(`${ban.user.username}#${ban.user.discriminator} was unbanned for ${ban.reason}`))
}
