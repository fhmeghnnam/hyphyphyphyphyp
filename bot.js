const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "626811830559571988" && ch.type === 'voice').join();
});

client.on("ready", () => {
    client.user.setStatus("online");
});








client.login(process.env.BOT_TOKEN);
