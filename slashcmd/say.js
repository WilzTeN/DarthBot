const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName ("say")
    .setDescription ("El bot dira lo que tu digas.")
    .addStringOption(option => option.setName("texto").setDescription("lo que quieras.").setRequired(true)),

    async run(client, interaction) {
        
        const texto = interaction.options.getString("texto")
        await interaction.deferReply()

        setTimeout(() =>{
            interaction.editReply({ content: `${texto}` })
        }, 2000)
        
    }
}