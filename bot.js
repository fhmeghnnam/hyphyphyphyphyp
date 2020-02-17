const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "679085848196677643" && ch.type === 'voice').join();
});








client.login(process.env.BOT_TOKEN);
