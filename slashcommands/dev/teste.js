const Discord = require('discord.js')

module.exports = {
    name: 'teste',
    description: 'teste',
    ownerOnly: true,
    run: async(client, interaction) => {

        interaction.reply({ content: `Olá criador!`, ephemeral: true, allowedMentions: { repliedUser: false } })

    }
}