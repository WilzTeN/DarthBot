const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js")
const { Permissions } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('Kick')
    .setDescription('Expulsa al usuario')
    .setUserOption(option => option.setName("user").setDescription("Elije a la persona.").setRequired(true))
    .setStringOption(option => option.setNmae("reason").setDescription("Escribe una razon.").setRequired(true)),

    async run(client, interaction){
        await interaction.deferReply()

        const usuario = interaction.options.getMember("user")

        const razon = interaction.options.getString("reason")

        if(usuario.id === interaction.user.id) return interaction.editReply({ content: "No puedes Expulsarte a ti mismo.", ephemeral: true })

        if(!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.editReply({ content: "No tienes permisos para expulsar a un usuario.", ephemeral: true })

        if(!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.editReply({ content: "No tengo permisos para expulsar a un usuario.", ephemeral: true })

        if(interaction.guild.mee.roles.highest.comparePositionTo(usuario.roles.highest) <= 0) return interaction.editReply({ content: "No tengo el permiso para expulsar a una persona con un rol superior al mio.", ephemeral: true })

        if(!usuario.kickable) return interaction.editReply({ content: "No puedo expulsarlo.", ephemeral: true })

        try {
            usuario.kick({ reason: razon })
            const embed = new Discord.MessageEmbed()
            .setTitle(`${usuario.user.tag} ha sido expulsado.`)
            .setDescription(`Id del usuario **${usuario.id}**\nModerador: **${interaction.user.tag}**\nId del moderador: **${interaction.user.id}**`)
            .setColor(0x073576)

            await interaction.followUp({ embeds: [embed] })
        } catch (e) {
            console.error(e)
        }

    }
}