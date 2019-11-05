const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!"
client.on('ready',async () => {
  client.channels.find(ch => ch.id === "613749249968046123" && ch.type === 'voice').join();
});

client.on("ready", () => {

client.user.setActivity("Send nudes in DM please ");
});








client.login(process.env.BOT_TOKEN);
