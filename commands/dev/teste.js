const Discord = require('discord.js')

module.exports = {
    name: 'teste',
    description: 'teste',
    aliases: ['tt','test'],
    ownerOnly: true,
    run: async(client, message, args) => {

        message.reply({ content: `Olá criador!`, allowedMentions: { repliedUser: false } })

    }
}