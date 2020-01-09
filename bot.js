const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "664242334157897728" && ch.type === 'voice').join();
});








client.login(process.env.BOT_TOKEN);
