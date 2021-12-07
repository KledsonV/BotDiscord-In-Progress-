const discord = require('discord.js')

module.exports = {
    name: "ping" , 
    author: "KledsonV" ,


    run: async(client, message, args) => {
        
        let cor_da_embed = "BLUE"

        let embed1 = new discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`**\`🏓\`Calculando o ping...**`)

        let embed2 = new discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`**O seu ping é ${client.ws.ping} ms\.**`)

        message.reply({ content: `${message.author}`, embeds: [embed1]}).then(message =>{
            setTimeout(() => {
                
                message.edit({content: `${message.author}`, embeds: [embed2]})

            }, 2000);
        })
    }

}