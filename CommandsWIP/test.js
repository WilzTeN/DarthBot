const { SlashCommandBuilder } = require( "@discordjs/builders")
const { MessageEmbed} = require ("discord.js")
const Discord = require ("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
	.setDescription('Ban a member!')
	.addUserOption(option =>
		option.setName('target').setDescription('The member to ban'))

}