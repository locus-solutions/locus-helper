const emotes = require('../Utils/locus');

module.exports.caves = [
    {
        name: "Crystalic",
        aliases: ["crystalic", "crstalic", "crstlc"],
        description: "Crystalic is a small but deep water cave.",
        stones: ["Moldavite", "Amethyst", "Serendibite", "Citrine"]
    },
    {
        name: "Werfeno",
        aliases: ["werfeno", "werfno", "wrfno"],
        description: "Werfeno is a deep and big land cave.",
        stones: ["Chrysocolla", "Sapphire", "Citrine"]
    }
]

module.exports.tools = [
    {
        name: "Stone Pickaxe",
        aliases: ["stonepickaxe", "stone pickaxe"],
        price: "free",
        description: "A basic pickaxe made out of stone. A pickaxe is required to mine stones.",
        emote: emotes.stonep
    },
    {
        name: "Amethyst Pickaxe",
        aliases: ["amethystpickaxe", "amethyst pickaxe"],
        price: "craftable",
        description: "placeholder",
        emote: emotes.amethystp
    },
    {
        name: "Sapphire Pickaxe",
        aliases: ["sapphirepickaxe", "sapphire pickaxe"],
        price: "craftable",
        description: "placeholder",
        emote: emotes.sapphirep
    }
]

module.exports.stones = [
    {
        name: "Moldavite",
        aliases: ["moldavite"],
        price: 1350,
        description: "Moldavite is a forest green, olive green or blue greenish vitreous silica projectile rock formed by a meteorite impact probably in southern Germany that occurred about 15 million years ago.",
        emote: emotes.moldavite
    },
    {
        name: "Chrysocolla",
        aliases: ["chrysocolla"],
        price: 2750,
        description: "Chrysocolla has a cyan color and is a minor ore of copper, having a hardness of 2.5 to 7.0. It is of secondary origin and forms in the oxidation zones of copper ore bodies.",
        emote: emotes.chrysocolla
    },
    {
        name: "Rutile",
        aliases: ["rutile"],
        price: 1250,
        description: "Rutile is a mineral composed primarily of titanium dioxide, and is the most common natural form of TiO₂. It was first described in 1803 by Abraham Gottlob Werner.",
        emote: emotes.rutile
    },
    {
        name: "Amethyst",
        aliases: ["amethyst"],
        price: 750,
        description: "Amethyst is a violet variety of quartz. The ancient Greeks wore amethyst and carved drinking vessels from it in the belief that it would prevent intoxication. Amethyst is a semiprecious stone that is often used in jewelry and is the traditional birthstone for February.",
        emote: emotes.amethyst
    },
    {
        name: "Sapphire",
        aliases: ["sapphire"],
        price: 4250,
        description: "Sapphire is a precious gemstone, a variety of the mineral corundum, consisting of aluminium oxide with trace amounts of elements.",
        emote: emotes.sapphire
    },
    {
        name: "Citrine",
        aliases: ["citrine"],
        price: 950,
        description: "Citrine is a popular type of quartz crystal often used to in conjunction with feng shui to welcome abundance, prosperity, and positivity. Natural citrine is quite rare, and most citrine is actually amethyst that has been heat-treated to alter its color. Citrine gets its name from the French word.",
        emote: emotes.citrine
    },
    {
        name: "Serendibite",
        aliases: ["serendibite"],
        price: 6250,
        description: "Serendibite is an extremely rare silicate mineral that was first discovered in 1902. The mineral is found in skarns associated with boron metasomatism of carbonate rocks where intruded by granite.",
        emote: emotes.serendibite
    }
]