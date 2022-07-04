const fs = require("fs")
const Discord = require("discord.js");

module.exports = {
  name: "ping",
  alias: ["holas"],

  execute(client, message ,args){
  	const embed = new Discord.MessageEmbed()
  	.setTitle("Ping-Pong!")
  	.setColor("RANDOM")
  	.setDescription(`Pong!🏓 **${client.ws.ping}ms**`)
  	.setTimestamp()

    message.channel.send({ embeds: [embed] })

  }

}
