const chalk = require('chalk');
const ms = require('ms');

module.exports = async(client) => {
    setTimeout(async function() {
        console.log(chalk.grey(`\n[-] Connecting...`))
    }, ms("0.2s"));
    setTimeout(async function() {
        console.log(`Connected to ${client.user.tag}`)
    }, ms("1s"));
    await client.user.setPresence({ activities: [{ name: ";help | locus.solutions" }] });
}