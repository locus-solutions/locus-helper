module.exports = {
    name: "test",
    aliases: ["testing"],
    category: "Info",
    run: async(client, message, args, util) => {
        if(!args[2]) {
            return util.quickEmbed(client, message, "Connection Alive.", client.colors.red)
        }
    }
}