const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: '[Utilidades] Veja o ping do bot',
    options: [
        {
            name: 'nome',
            description: 'introduza o seu nome (opcional)',
            type: Discord.ApplicationCommandOptionType.String,
            required: false
        }
    ],
    run: async(client, interaction) => {

        let nick = interaction.options.getString('nome')

        if (!nick) { nick = interaction.user.username; };

        interaction.reply({ content: `📡 | ${nick}, minha latência está em \`${client.ws.ping}\`ms.` })

    }
}