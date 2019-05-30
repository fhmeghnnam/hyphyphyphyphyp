
const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "580414237403512844" && ch.type === 'voice').join();
});

client.on("ready", () => {
    client.user.setStatus("online");
});








client.login(process.env.BOT_TOKEN);
