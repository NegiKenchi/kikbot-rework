const Discord = require('discord.js');
exports.run = (client, message, args, game)  => {
    if (message.mentions.users.first()) {
        userapelido = message.guild.member(message.mentions.users.first()).nickname
      user = message.mentions.users.first().username;
      userfoto = message.mentions.users.first().displayAvatarURL;
    userstatus = message.mentions.users.first().presence.status;
    usertag = message.mentions.users.first().tag;
    usercolorole = message.guild.member(message.mentions.users.first()).displayHexColor;
    usercriado = message.mentions.users.first().createdAt;
    userid = message.mentions.users.first().id;
  game2 = message.mentions.users.first().presence.game;
  userentrou = message.guild.member(message.mentions.users.first().id).joinedAt;
  usercargo = message.guild.member(message.mentions.users.first().id).roles.size;
  userbot = message.mentions.users.first().bot;
  
    } else {
      user = message.author.username;
      userfoto = message.author.displayAvatarURL;
      userstatus = message.author.presence.status;
    usertag = message.author.tag;
    usercolorole = message.author.highestRole.displayHexColor;
    usercriado = message.author.createdAt;
    userid = message.author.id;
    game2 = message.author.presence.game;
    userentrou = message.guild.member(message.author.id).joinedAt;
    usercargo = message.guild.member(message.author.id).roles.size;
    userapelido = message.guild.member(message.author.id).nickname
    userbot = message.author.bot;
    }
    function playing(){
      var playings = game2
      if(playings != undefined){
          return playings.name;
      }else{
          return "**Não detectado**";
      }
  }
    const moment = require('moment');
       moment.locale('pt-BR');
var embed = new Discord.RichEmbed()
.setAuthor('Informações de: '+user, userfoto)
.addField(":date: Criou a conta em", moment(usercriado).format('LLLL'), true)
.addField(":date: Entrou aqui em", moment(userentrou).format('LLLL'), true)
.addField(`:desktop: Jogando:`, `**${playing()}**`, true)
.addField(`:computer: ID:`, userid, true)
.setColor(usercolorole)
.setTimestamp()
.setFooter('kikbot-', client.user.avatarURL)
message.channel.send({embed : embed})
  };