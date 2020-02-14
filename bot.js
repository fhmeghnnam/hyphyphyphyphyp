const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "675453268851163146" && ch.type === 'voice').join();
});








client.login(process.env.BOT_TOKEN);
