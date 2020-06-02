const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

bot.on('ready', function () {
    console.log("Je suis pret a etre utiliser.");
    bot.user.setActivity('DO IT FOR BIG TETON!').catch(console.error);
});

bot.on("message", msg => {
    if (msg.content === "!help") {
        msg.reply("!jambes");
        msg.reply("!fessier");
        msg.reply("!bras");
        msg.reply("!abdos");
        msg.reply("!dos");
        msg.reply("!pect");
    }
    // les commande
});


bot.login(token);
