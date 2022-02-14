const { Client, Collection } = require('discord.js');
const config = require('../config.json');
const colors = require('./colors.json');

class locus extends Client {
    constructor(options) {
        super(options);

        this.commands = new Collection();
        this.aliases = new Collection();
        this.config = config;
        this.colors = colors;
    }

    start() {
        require('./start')(this);
        
        this.login(this.config.token);
    }
}

module.exports = locus;