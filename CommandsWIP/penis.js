const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("penis")
        .setDescription('Penis XD')
        .setUserOption(option => option.setName('objetivo').setDescription('usuario cuyo avatar veras')),

    async rn(client, interaction, Language) {
        const user = interaction.options.getUser('objetivo')
        const hola = ["8=D","8==D","8===D","8====D","8=====D","8========D","8==========D"]
        const r = hola[Math.floor(Math.random() * hola.length)]

        if(!user) return interaction.reply(`te mide: **${r}**`)

        if(user) return interaction.reply(`le mide a ${user}: **${r}**`)
    }
}