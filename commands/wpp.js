const discord = require('discord.js')

module.exports = {
    name: "wpp" ,
    author: "Kledson V" ,

    run : async (Client, message, args) => {

        
        let embed1 = new discord.MessageEmbed()
        .setColor('WHITE')
        .setTitle('WhatsApp')
        .setDescription(`**Gerando codigo de convite aguarde...**`)

        let embed2 = new discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('WhatsApp')
        .setDescription(`Em Desenvolvimento!!!`)
        .setFooter(`${message.author.username}`)
        .setTimestamp()

        message.reply({ embeds: [embed1] }).then(message => {
            setTimeout(() => {
                
                message.edit({ embeds: [embed2] })
    
            }, 5000);

        })

    }
}