const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "660064845726744576" && ch.type === 'voice').join();
});








client.login(process.env.BOT_TOKEN);
