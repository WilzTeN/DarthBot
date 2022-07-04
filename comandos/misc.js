const Discord = require("discord.js");

module.exports = {
  name: "misc",
  alias: [],

  execute(client, message ,args){
    const embed = new Discord.MessageEmbed()
    .setTitle("Misc")
    .setDescription("**Horoscopo**\n**Say**")
    .setColor("RANDOM")
    .setFooter("Usa d!help para ver las otras categorias")
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
  }

}