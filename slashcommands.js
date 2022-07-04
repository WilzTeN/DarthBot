const fs = require("fs")
const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientID, guild } = require("./config.json")
const commands = []
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"));

for(const file of slashcommandsFiles){
    const slash = require(`./slashcmd/${file}`)
    commands.push(slash.data.toJSON())
}

const rest = new REST({ version: "9" }).setToken("OTYyNDczNTg0MzE4NjE5NjY4.YlIDYA.YHabkKSgIYHSVL3dxpQJ3f4e2x4")

createSlash()

async function createSlash(){
    try{
        await rest.put(
            Routes.applicationCommands(clientID, guild), {
                body: commands
            }
        )
        console.log("slash commands agregados")
    } catch(e) {
        console.error(e)
    }
}