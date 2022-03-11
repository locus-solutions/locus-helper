const { MessageEmbed } = require('discord.js');

module.exports.randomizeArray = function(array) {
    if(!array || typeof array !== 'object') throw new TypeError("[Utils] randomArray - array must be an object");
    return array[Math.floor(Math.random() * array.length)];
};

module.exports.packageJson = require('../package.json');

module.exports.randomizeNumber = function(min, max) {
    if(typeof min !== "number") throw new Error("[Utils] randomizeNumber - minimum number must be a number")
    if(typeof max !== "number") throw new Error("[Utils] randomizeNumber - maximum number must be a number")
    return Math.floor(Math.random() * (max - min + 1) + min)
};

module.exports.quickEmbed = async function(client, message, content, color) {
    if(!client) throw new Error("[Utils] errorEmbed - client must be provided")
    if(!message) throw new Error("[Utils] errorEmbed - message must be provided")
    if(!content || typeof content !== 'string') throw new TypeError("[Utils] errorEmbed - content must be a string")
    if(!color || typeof color !== 'string') throw new TypeError("[Utils] - errorEmbed - color must be a string")

    const quickEmbed = new MessageEmbed()
    .setDescription(content)
    .setColor(color)

    await message.reply({
        embeds: [quickEmbed],
    })
};

