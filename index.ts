const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs')
const dotenv = require('dotenv');
var colors = require('colors/safe');
var prompt = require('prompt-sync')();
import chalk from 'chalk';

dotenv.config();
const { TOKEN } = process.env;

const client = new Client({
    checkUpdate: false
});

client.login(TOKEN);

client.on('ready', async () => {
    console.log(colors.red(`

    █    ██   ██████ ▓█████  ██▀███    ██████  ██▓███ ▓██   ██▓
    ██  ▓██▒▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒▒██    ▒ ▓██░  ██▒▒██  ██▒
   ▓██  ▒██░░ ▓██▄   ▒███   ▓██ ░▄█ ▒░ ▓██▄   ▓██░ ██▓▒ ▒██ ██░
   ▓▓█  ░██░  ▒   ██▒▒▓█  ▄ ▒██▀▀█▄    ▒   ██▒▒██▄█▓▒ ▒ ░ ▐██▓░
   ▒▒█████▓ ▒██████▒▒░▒████▒░██▓ ▒██▒▒██████▒▒▒██▒ ░  ░ ░ ██▒▓░
   ░▒▓▒ ▒ ▒ ▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░▒▓▒░ ░  ░  ██▒▒▒ 
   ░░▒░ ░ ░ ░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░░ ░▒  ░ ░░▒ ░     ▓██ ░▒░ 
    ░░░ ░ ░ ░  ░  ░     ░     ░░   ░ ░  ░  ░  ░░       ▒ ▒ ░░  
      ░           ░     ░  ░   ░           ░           ░ ░     
                                                       ░ ░                                                            
    `))

    console.log(`Logged into ${client.user.username}\n`);
});


client.on('ready', async () => {

    console.log('1) Check one user.');
    console.log('2) Check many users.');

    var r:any = prompt('-> ');

    if(r == '1') {
        var id: any = prompt('User id: ');

        client.guilds.cache.forEach((guild: any) => {
            const member = guild.members.cache.get(id);
            if (member && member.voice.channel) {
                console.log(colors.green(`${member.user.username}`) + ` is on call at ` + colors.green(`${guild.name}`) + ` channel id: ` + colors.green(`${member.voice.channel.id}`));
            }
        });
    } else if(r == 2) {
        var ids: any = prompt('Users ids: ');
    }
});