const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Bot ready
client.once('ready', () => {
  console.log('Bot online ho gaya!');
});

// Commands
client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!hello') {
    message.reply('Hello bhai 😎');
  }

  if (message.content === '!phonk') {
    message.reply('Full phonk vibe 🔥');
  }

  if (message.content === '!blox') {
    message.reply('Blox Fruits OP 🍈🔥');
  }

  if (message.content === '!help') {
    message.reply('Commands: !hello, !phonk, !blox');
  }
});

// Login
client.login(process.env.TOKEN);