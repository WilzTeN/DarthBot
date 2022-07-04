const Discord = require("discord.js");

module.exports = {
  name: "canales",
  alias: [],

  execute(client, message ,args){
  	const embed = new Discord.MessageEmbed()
  	.setTitle("Canales de cosmos")
  	.setColor("RANDOM")
  	.setDescription("**YT**\n\n")
  	.setTimestamp()

  	message.channel.send({ embeds: [embed] })

  }

}