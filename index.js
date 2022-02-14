const locus = require('./Utils/locus');
const client = new locus({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_PRESENCES", "GUILD_MESSAGE_REACTIONS"], allowedMentions: { parse: ['users'], repliedUser: false } });
client.start()