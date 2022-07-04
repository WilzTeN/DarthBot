const Discord = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("poll")
    .setDescription("Haz una encuesta")
    .addChannelOption(o => o.setName("canal").setDescription("El canal a enviar la encuesta").setRequired(true))
    .addStringOption(o => o.setName("pregunta").setDescription("La pregunta de la encuesta").setRequired(true))
    .addStringOption(o => o.setName("opcion1").setDescription("Primera opcion").setRequired(true))
    .addStringOption(o => o.setName("opcion2").setDescription("Segunda opcion").setRequired(true))
    .addStringOption(o => o.setName("opcion3").setDescription("Tercera opcion").setRequired(true))
    .addStringOption(o => o.setName("opcion4").setDescription("Cuarta opcion").setRequired(true))
    .addStringOption(o => o.setName("opcion5").setDescription("Quinta opcion").setRequired(true))
    .addStringOption(o => o.setName("opcion6").setDescription("Sexta opcion").setRequired(true))
    .addStringOption(o => o.setName("opcion7").setDescription("Septima opcion").setRequired(true))
    .addStringOption(o => o.setName("opcion8").setDescription("Octava opcion").setRequired(true))
    .addStringOption(o => o.setName("opcion9").setDescription("Novena opcion").setRequired(true))
    .addStringOption(o => o.setName("opcion10").setDescription("Decima opcion").setRequired(true)),

    @param {Discord.Client} client
    @param {Discord.CommandInteraction} interaction

    async
}