const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "ping",
    description: "Veja a latência do bot",
    run: async(client, interaction) => {

        let PingEmbed = new EmbedBuilder()
            .setColor("Random")
            .setDescription(`${client.ws.ping}ms.`)

        interaction.reply({ embeds: [PingEmbed], ephemeral: true, allowedMentions: { repliedUser: false } })    

    }
}