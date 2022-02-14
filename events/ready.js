const chalk = require('chalk');
const ms = require('ms');

module.exports = async(client) => {
    setTimeout(async function() {
        console.log(chalk.white(`\n[${chalk.blueBright("LOCUS-HELPER")}]${chalk.white(" - ")}${chalk.blueBright("Connecting...")}`));
    }, ms("0.2s"));
    setTimeout(async function() {
        console.log(chalk.white(`[${chalk.blueBright("LOCUS-HELPER")}]${chalk.white(" - ")}${chalk.blueBright(`Connected to ${client.user.tag}.`)}`))
    }, ms("1s"));
    await client.user.setPresence({ activities: [{ name: ";help | locus.solutions" }] });
}