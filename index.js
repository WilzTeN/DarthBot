const Discord = require("discord.js");
const intents = new Discord.Intents();
const client = new Discord.Client({ intents: 32767});
require('dotenv').config()

client.on("ready", () => {
  console.log("estoy Listo")


  client.user.setPresence({ activities: [{ name: 'On develoment' }], status: 'dnd' });
  //Activity
  //client.user.setStatus('dnd');
  // client.user.setActivity('Develoment', { type: 'WHATCHING' });
});

// setInterval(() => {
//   let status = [
//     `PLAYING d!help`
//   ]
//   function presence(){
//     client.user.setPresence({
//       status: "online",
//       activity: status[Math.floor(Math.random() * status.length)],
//     });
//   }
//   presence();
// }, 10000);

const fs = require("fs")
let { readdirSync } = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith(".js"));

for (const file of commandFiles){
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.slashcommands = new Discord.Collection();
const slashcommandsFiles = fs.readdirSync("./slashcmd/").filter(file => file.endsWith("js"));

for(const file of slashcommandsFiles){
  const slash = require(`./slashcmd/${file}`)
  console.log(`Slash commands - ${file} cargado.`)
  client.slashcommands.set(slash.data.name, slash)
}

client.on("interactionCreate", async(interaction) => {
  if(!interaction.isCommand()) return;

  const slashcmds = client.slashcommands.get(interaction.commandName)

  if(!slashcmds) return;

  try{
    await slashcmds.run(client, interaction)
  } catch(e) {
    console.error(e)
  }
});

client.on('message', async(message) => {
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
  message.channel.send("Mi prefix es d!, escribe d!help para ayuda")}
})

const { Client } = require("djs-minigames")

client.games = new Client({
  emitEvents: true,
  language: "ES",
  playMoreThanOne: false,
  defaultTimeout: 60000,
})

client.games.on("TictactoeEnd", async(data) => {

  if(data.status === "won"){
    const embed = new Discord.MessageEmbed()
    .setTitle("TicTacToe terminado")
    .setDescription(`se enfretarn ${data.target.username} vs ${data.user.username}, y gano **${data.winner.username}**`)
    .setColor("BLUE")
    .setTimestamp()

    return data.textChannel.send({embeds: [embed]})
  }

  if(data.status === "tied"){
    const embed = new Discord.MessageEmbed()
    .setTitle("TicTacToe Terminado.")
    .setDescription(`Se enfretaron ${data.target.username} vs ${data.user.username} y quedaron **empate**`)
    .setColor("RANDOM")
    .setTimestamp()

    return data.textChannel.send({embeds: [embed]})
  }
})

client.on("messageCreate", (message) => {

  let prefix = "d!"

  if(message.author.bot) return;

  if(message.channel.type === "dm") return;

  if(!message.content.startsWith(prefix)) return;


  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name == command || c.alias && c.alias.includes(command))

  if(cmd){
    cmd.execute(client, message, args)
  }
  if(!cmd){
    if(message.content === prefix) return;
    const embed = new Discord.MessageEmbed()
    .setTitle(":x: | Desconozco ese comando :c")
    .setDescription(`No he encontrado "${command}" en mi base de datos, intenta: d!help`)
    .setColor("RANDOM")
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
  }

});

client.login(process.env.token);