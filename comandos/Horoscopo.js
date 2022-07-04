const Discord = require("discord.js");

module.exports = {
    name: "horoscopo",
    alias: [],

    async execute (client, message, args) {
        const signo = args.slice(0).join(" ")


        if (!signo) return message.channel.send(":x: **Dime tu signo zodiacal**")

        let Options = ["libra", "tauro", "cancer", "capricornio", "sagitario", "geminis", "piscis", "leo", "Aries", "virgo", "escorpio", "acuario"]

        if (!Options.includes(args[0].toLowerCase())) return message.channel.send(":x: **Ese no es un signo**")

        let author = message.author.username;
        let amor = Math.floor(Math.random() * 100)
        let dinero = Math.floor(Math.random() * 100)
        let salud = Math.floor(Math.random() * 100)
        let suerte = Math.floor(Math.random() * 100)
        let trabajo = Math.floor(Math.random() * 100)
        let sexo = Math.floor(Math.random() * 100)

        const embed = new Discord.MessageEmbed()
        .setTitle(`He determinado que el horoscopo de ${author} es: `)
        .setFields(
            { name: '**Amor**', value: `**${amor}**`, inline: true},
            { name: '**Dinero**', value: `**${dinero}**`, inline: true},
            { name: '**salud**', value: `**${salud}**`, inline: true},
            { name: '**suerte**', value: `**${suerte}**`, inline: true},
            { name: '**trabajo**', value: `**${trabajo}**`, inline: true},
            { name: '**sexo**', value: `**${sexo}**`, inline: true},
        )
        .setColor("RANDOM")

        message.channel.send({ embeds: [embed] })
    }
}