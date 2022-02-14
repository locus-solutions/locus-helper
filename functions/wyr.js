module.exports = async(client, message, apikey) => {
    if(!client) throw new Error("[Functions] WouldYouRather - 'client' is a required argument")
    if(!message) throw new Error("[Functions] WouldYouRather - 'message' is a required argument");

    const fetch = require("node-fetch");
    const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
  
    function getRandomString(length) {
      var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      return result;
    }

    let id1 = (getRandomString(4)+"-"+getRandomString(4)+"-"+getRandomString(4)+"-"+getRandomString(4))
    let id2 = (getRandomString(4)+"-"+getRandomString(4)+"-"+getRandomString(4)+"-"+getRandomString(4))

    let res;
    if(apikey) {
      res = await fetch(`https://api.tovade.xyz/v1/fun/wyr`, {
        headers: {
          Authorisation: `Bearer ${apikey}`,
        },
      }).then((re) => re.json());
    } else {
      res = await fetch(`https://api.tovade.xyz/v1/fun/wyr`).then((re) =>
        re.json()
      );
    }
  
    let btn = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Option A")
    .setCustomID(id1);
    let btn2 = new MessageButton()
    .setStyle("DANGER")
    .setLabel("Option B")
    .setCustomID(id2);
    let row = new MessageActionRow()
    .addComponents(btn, btn2)
    
    const wyrE = new MessageEmbed()
    .setTitle("Would you Rather?")
    .setDescription(`**A:** ${res.questions[0]}\n**B:** ${res.questions[1]}`)
    .setColor(client.colors.accent)
    
    await message.reply({
        embeds: [wyrE],
        components: [row],
        allowedMentions: {
          repliedUser: false
        }
    })
    .then(async(m) => {

        const filter = (i) => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector(filter, { time: 30000 });

        collector.on("collect", (button) => {
        const wyrEE = new MessageEmbed()
        .setTitle("Would you Rather?")
        .setDescription(`**A:** ${res.questions[0]} (${res.percentage["1"]}%)\n**B:** ${res.questions[1]} (${res.percentage["2"]}%)`)
        .setColor(client.colors.accent)
          if(button.customID === id1) {
            btn = new MessageButton()
            .setStyle("PRIMARY")
            .setLabel("Option A")
            .setCustomID(id1)
            .setDisabled(true);
            btn2 = new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Option B")
            .setCustomID(id2)
            .setDisabled(true);
            row = new MessageActionRow()
            .addComponents(btn, btn2)

            collector.stop();
            button.update({
                embeds: [wyrEE],
                components: [row]
            })
          } else if(button.customID === id2) {
            btn = new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Option A")
            .setCustomID(id1)
            .setDisabled(true);
            btn2 = new MessageButton()
            .setStyle("PRIMARY")
            .setLabel("Option B")
            .setCustomID(id2)
            .setDisabled(true);
            row = new MessageActionRow()
            .addComponents(btn, btn2)

            collector.stop();
            button.update({
                embeds: [wyrEE],
                components: [row]
            })
          }
        });

        collector.on("end", async(collected) => {
            if(collected.size === 0) {
                btn = new MessageButton()
                .setStyle("PRIMARY")
                .setLabel("Option A")
                .setCustomID(id1)
                .setDisabled(true);
                btn2 = new MessageButton()
                .setStyle("DANGER")
                .setLabel("Option B")
                .setCustomID(id2)
                .setDisabled(true);
                row = new MessageActionRow()
                .addComponents(btn, btn2)

                const wyrEE = new MessageEmbed()
                .setTitle("Would you Rather?")
                .setDescription(`**A:** ${res.questions[0]} (${res.percentage["1"]}%)\n**B:** ${res.questions[1]} (${res.percentage["2"]}%)`)
                .setColor(client.colors.accent)
                await m.edit({
                    embeds: [wyrEE],
                    components: [row],
                })
            }
        })
      });
  };