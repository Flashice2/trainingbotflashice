const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

bot.on('ready', function () {
    console.log("Je suis pret a etre utiliser.");
    bot.user.setActivity('DO IT FOR BIG TETON!').catch(console.error);
});

bot.on("message", msg => {
    if (msg.content === "!help") {
        const commande = "!jambes \n !fessier !bras !abdos !dos !pect"
        msg.reply(commande);
    }
    // les commande
});


bot.login(token);
