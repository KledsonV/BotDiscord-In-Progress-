const { Client, Intents } = require('discord.js');
const discord = require('discord.js');
require('dotenv').config();
const client = new discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]});
const config = require('./config.json');
const prefix = config.prefix;

client.on('ready', async () =>{


    //Console LOG
    console.log('O bot foi iniciado com sucesso ✅')
    //Console LOg

    //Status
    let StatusRandom = [
        `${client.guilds.cache.size} Servidores!` ,
        `${`Bem-Vindo!!!`}` ,
        `${client.users.cache.size} Usuários!` ,
        `${`Bem-Vindo!!!`}` ,
    ]

    let index = 0
    setInterval(() => {
        if(index === StatusRandom.length) index = 0;
        const status = StatusRandom[index];
        client.user.setActivity(status);
        index++;

    }, 10000);
    //Status

})

client.on('guildMemberAdd', async (member) =>{
    
    let guild = client.guilds.cache.get('894345725670981633')
    let canal = client.channels.cache.get('894345725670981636')

    if(guild != member.guild){

    }else{

    let embed = new discord.MessageEmbed()
    .setColor('AQUA')
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`🐊 Bem-Vindo 🐊`)
    .setImage('https://media4.giphy.com/media/FIZ1QC610AAhi/giphy.gif')
    .setDescription(`${member.user}, Boas Vindas ao servidor ${guild.name}! Atualmente estamos com ${member.guild.memberCount} membros.`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true , format: "png" , size: 1024}))
    .setFooter('ID do usuário: ' + member.user.id)
    .setTimestamp()


    await canal.send({ embeds: [embed] })
    console.log('Sucesso ✅✅✅')

    }
})

client.on('messageCreate', async message => {

    if(message.author.bot) return;
    if(message.channel.type == "DM") return;
    if(!message.content.startsWith(config.prefix)) return;

    const agrs = message.content.trim().slice(config.prefix.length).split(/ +/g);
    const comando = agrs.shift().toLocaleLowerCase();

        
        try {
            
            const commandFIle = require(`./${process.env.COMMANDS_PATH}/${comando}.js`);
            commandFIle.run(client, message, agrs);
            
        }catch (err){
            
            let embed = new discord.MessageEmbed()
            .setColor('RED')
            .setDescription(`**Comando inexistente, ultilize **` + ` "${prefix}ajuda "`)


            console.log(message)
            await message.reply({ embeds: [embed] })
        }
        
});

client.login(process.env.TOKEN)