const Discord = require("discord.js");

module.exports = {
  name: "help",
  alias: [],

  execute(client, message ,args){
    const embed = new Discord.MessageEmbed()
    .setTitle("Mi lista de comandos")
    .setColor("RANDOM")
    .setDescription("**Revisa las siguientes categorias**\nUsa d! y el nombre de la categoria para verla\n**Misc**\nComandos variados\n**Fun**\nComandos divertidos")
    // .setDescription(`   **Misc**\n1.- ping\n2.- say\n3.- 8ball\n4.-horoscopo\n\n**WIP**\n1.-Hangman\n2.-kick\n3.-support\n4.-ban`)
    .setFooter("My prefix d!")
    .setTimestamp()

    message.channel.send({ embeds: [embed] })


  }

}


// const Discord = require("discord.js")
// const fs = require("fs")
// const{ pagination } = require("discord.js-fuctions")

// module.exports = {
//   name: "testeHelp",
//   alias: [],

//   async execute(client, message, args){

//     let commands = fs.readdirSync("./comandos/").filter(f => f.endsWith(".js"))

//     let texto = commands.map(c => `\`${c.replace(/.js/, "")}\``)

//     await pagination(client, message, texto, `ayuda de ${client.user.username}`)
//   }
// }