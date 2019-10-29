const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "636169225693691904" && ch.type === 'voice').join();
});

client.on("ready", () => {

client.user.setActivity("if you read this I love you");
});








client.login(process.env.BOT_TOKEN);
