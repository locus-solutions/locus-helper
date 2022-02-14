const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    name: "gitsearch",
    category: "Utility",
    description: "Search for github profiles.",
    aliases: ["git"],
    usage: "github <user>",
    run: async(client, message, args, util) => {
        const name = args.join(" ")
        if(!name) {
            return util.quickEmbed(client, message, "Please enter a name to search for.", client.colors.red)
        }
        
        const url = `https://api.github.com/users/${name}`

        let response 
        try {
            response = await fetch(url).then(res => res.json())
        }
        catch (e) {
            return util.quickEmbed(client, message, "There was an error.", client.colors.red)
        }

        const embed = new MessageEmbed()
        .setThumbnail(response.avatar_url)
        .addField("Profile URL:", `${response.html_url}`, true)
        .addField("Bio:", `${response.bio}`, true)
        .addField("Twitter Handle:", `${response.twitter_username}`, true)
        .addField("Public Repos:", `${response.public_repos}`, true)
        .addField("Public Gists:", `${response.public_gists}`, true)
        .addField("Followers:", `${response.followers}`, true)
        .addField("Following:", `${response.following}`, true)
        .addField("Created at:", `${response.created_at}`, true)
        .setColor(client.colors.accent)

        await message.reply({
            embeds: [embed]
        });
    }
}