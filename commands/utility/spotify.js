const { MessageAttachment } = require('discord.js');
const canvacord = require('canvacord');

module.exports = {
    name: "spotify",
    category: "Utility",
    description: "Displays a user's spotify status.",
    aliases: [" "],
    usage: "spotify [user]",
    run: async(client, message, args, util) => {
        let user = message.mentions.users.first() || message.member;

        if(user.bot) {
            return util.quickEmbed(client, message, "You cannot get a bot's status", client.colors.red)
        }

        let status;
        if(user.presence.activities.length === 1) status = user.presence.activities[0];
        else if(user.presence.activities.length > 1) status = user.presence.activities[1];

        if(user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
            return util.quickEmbed(client, message, `${user} is not listening to Spotify`, client.colors.red)

        }

        if(status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
            name = status.details,
            artist = status.state,
            album = status.assets.largeText;

        const card = new canvacord.Spotify()
        .setAuthor(artist)
        .setAlbum(album)
        .setStartTimestamp(status.timestamps.start)
        .setEndTimestamp(status.timestamps.end)
        .setImage(image)
        .setTitle(name)

        card.build()
        .then(buffer => {
            canvacord.write(buffer, "spotify.png");

            let attachment = new MessageAttachment(buffer, "spotify.png")
            message.channel.send({ files: [attachment] })
            })
        }
    }
}