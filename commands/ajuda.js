const discord = require('discord.js')

module.exports = {
    name: "ajuda" ,
    author: "Kledson V" , 

    run: async(client, message, args) =>{


        let embed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`🆘 Ajuda 🆘`)
        .addFields(
            { name: `**Comandos**`, value: `**,ping ,wpp ,ajuda**` },
        )



        message.reply({ embeds: [embed] })

    }
}