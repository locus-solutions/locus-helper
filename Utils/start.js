const fs = require('fs');
const chalk = require('chalk');
const util = require('util')
const readdir = util.promisify(fs.readdir);

async function start(client) {

    console.clear()

    const folders = await readdir('./commands/');
    folders.forEach((dir) => {
        const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));
        for(const file of commands) {
            const pull = require(`../commands/${dir}/${file}`);
            client.commands.set(pull.name, pull)
            pull.aliases.forEach((alias) => {
                client.aliases.set(alias, pull.name);
            });
            console.log(chalk.white(`[${chalk.green("COMMANDS")}]${chalk.white(" - ")}${chalk.green(`Loaded ${pull.name}.js`)}`));
        }
    })
    console.log(" ");
    
    const events = fs.readdirSync('./events/').filter(d => d.endsWith('.js'));
    for(let file of events) {
        const evt = require(`../events/${file}`);
        let eName = file.split('.')[0];
        client.on(eName, evt.bind(null, client));
        console.log(chalk.white(`[${chalk.green("EVENTS")}]${chalk.white(" - ")}${chalk.green(`Loaded ${eName}.js`)}`));
    };

    process.on('unhandledRejection', error => {
        console.error(`[${chalk.red([`HANDLED-ERROR`])}]${chalk.white(` -`)}`, error.stack);
    });
    
}

module.exports = start;