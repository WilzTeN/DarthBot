const Discord = require("discord.js");

module.exports = {
  name: "8ball",
  alias: [],

  execute(client, message ,args){

    const pregunta = args.join(" ")
    if(!pregunta) return message.channel.send("Preguntame")

    let respuestas = ["Si.", "Talvez...", "No."]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle("8Ball")
    .setColor("RANDOM")
    .setDescription(`Tu pregunta:\n**${pregunta}**\n\nPienso:\n**${random}**`)
    .setTimestamp()

    message.channel.send({ embeds: [embed] })

  }

}
