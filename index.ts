const { Client } = require('discord.js-selfbot-v13');
const dotenv = require('dotenv');

dotenv.config();
const { TOKEN } = process.env;

const client = new Client({
    
});

client.on('ready', async () => {
    console.log(`Logged into ${client.user.username}`);
})

client.login(TOKEN);