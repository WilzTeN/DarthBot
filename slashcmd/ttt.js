const { SlashCommandBuilder } = require("@discordjs/builders")
const { TicTacToe } = require("djs-minigames")
const { interaction } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("tictactoe")
    .setDescription("Juega al TicTacToe")
    .addUserOption(o => o.setName("user").setDescription("Tu contrincante").setRequired(true)),
    run: async(client, interaction) => {

        const game = new TicTacToe(client.games, interaction, interaction.options.getUser("user"), {
            embedColor: "RANDOM",
            embedFooter: "A jugar",
            timeoutEmbedColor: "RED",
            timeout: 60000,
        })


        game.play()
    }
}
