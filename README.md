<div align="center">
  <a href="https://github.com/synesta/locus-helper">
    <img src="logo.png" alt="Logo">
  </a>

  <p align="center">
    Multi-purpose discord bot
    <br />
    <a href="https://github.com/synesta/locus-helper/issues">Found a bug?</a>
  </p>
</div>

## Notes
- There are some modules missing, due to this there's some things that may not be used, and some features might be sloppy, all of this will be redone
- If you would like to contribute to the missing modules, contact me through one of [these](https://github.com/synesta/locus-helper#contact-me-through) options
- If you'd like to be notified when the modules are completed, click the "Watch" button on the top right

## Setup
-   <a href="https://nodejs.org/dist/v16.14.0/node-v16.14.0-x64.msi">Install NodeJS</a>
-   <a href="https://yarnpkg.com/getting-started/install">Install Yarn</a>
-   Clone the repository
-   Change configuration values in `config.json`
-   Open the cloned repository on your machine in a shell and write `yarn` to install dependencies
-   Start the bot with `node .`

## Command Example
```js
// Import Modules
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "",
    category: "",
    description: "",
    aliases: [""],
    usage: "",
    run: async(client, message, args, util) => {
        const embed = new MessageEmbed()

        await message.channel.send({
            embeds: [embed]
        });
    }
}
```

## Util Examples
```js
const util = require('../../utils/util.js');

// randomArray
const array = ["1", "2", "3", "4"]
console.log(util.randomizeArray(array))

// packageJson
console.log(util.packageJson.version)

// randomizeNumber
console.log(util.randomizeNumber(10, 100))

// quickEmbed
return util.quickEmbed(client, message, "There was an error, please try again", client.colors.red)
```

## Guidelines
-   Use [Yarn](https://yarnpkg.com/)
-   Use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) before committing code
-   Test your changes locally before committing code

## License
Locus Helper is distributed under the Apache License 2.0

## Credits
-   <a href="https://github.com/synesta">synesta</a>
-   <a href="https://github.com/honzu">honzu</a>
-   <a href="https://github.com/rayzdev">rayz</a>

## Contact Me:
-   Email: synesta@locus.solutions
-   Discord: synesta#5526
-   Telegram: synpres
