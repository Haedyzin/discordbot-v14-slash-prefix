const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Ver o ping do bot',
    aliases: ['latency', 'latencia'],
    run: async(client, message, args) => {

        let nick = args.join(" ")
        if (!nick) { nick = message.author.username }

        message.reply({ content: `📡 **|** ${nick}, Meu ping está em \`${client.ws.ping}\`ms.` })

    }
}