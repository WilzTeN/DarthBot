const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("banea a un usuario")
    .addUserOption(option => option.setName("usuario").setDescription("elige al usuario a banear.").setRequired(true))
    .addStringOption(option => option.setName("Razon").setDescription("razon a banear").setRequired(true)),

    async run(client, interaction){
        await interaction.deferReply().catch(e => console.error(e))
        
        const usuario = interaction.options.getMember("usuario")
        const razon = interaction.options.getString("razon")

        const botpermisos = interaction.guild.me.permissions.has("BAN_MEMBERS")
        if(!botpermisos) return interaction.editReply({ content: `**:x:** | no tengo suficientes permisos para banear`, ephemeral: true})

        const user = interaction.guild.members.cache.get(usuario.id)
        if(interaction.guild.me.roles.highest.comparPostionTo(user.roles.highest) <= 0) return interaction.editReply({ content: `No puedo banear a un miembro con permisos superiores a los mios`, ephemeral: true})
        const member = await interaction.guild.members.fetch(user.id)

        if(member.id === interaction.user.id) return interaction.ediReply({ content: `**:x:** | No puede banearse a si mismo`, ephemeral: true})
        if(member.permissions.has("BAN_MEMBERS")) return interaction.ediReply({ content: `**:x:** | No tienes permisos para ejecutar este comando`, ephemeral: true})

        usuario.ban({ reason: razon })

        const embed = new MessageEmbed()
        .setTitle("**BAN**")
        .setDescription(`el usuario ${usuario} ha sido baneado\n\n **Razón:** ${razon}`)
        .setColor("RED")
        .setTimestamp()
        .setFooter({ text: `comando hecho por: ${interaction.user.tag}`})

        interaction.editReply({ embeds: [embed] })
    }
}