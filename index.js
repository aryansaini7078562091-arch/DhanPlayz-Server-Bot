const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

client.once('ready', () => {
  console.log('Bot online ho gaya!');
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  message.reply('Bot working 🔥');
});

client.login(process.env.TOKEN);