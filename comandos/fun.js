const Discord = require("discord.js");

module.exports = {
  name: "fun",
  alias: [""],

  execute(client, message ,args){
    const embed = new Discord.MessageEmbed()
    .setTitle('Funing')
    .setDescription('**fun**\n**8ball**\n**penis**')
    .setColor("RANDOM")
    .setFooter("usa d!help para ver las diferentes categorias")
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
  }

}