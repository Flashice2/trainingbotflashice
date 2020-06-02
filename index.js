const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

bot.on('ready', function () {
    console.log("Je suis pret a etre utiliser.");
    bot.user.setActivity('DO IT FOR BIG TETON!').catch(console.error);
});

bot.on("message", msg => {
    if (msg.content === "!help") {
        const commande = "\n         -Help-         \n!jambes : ------- \n!fessier : ------- \n!bras : ------- \n!abdos : ------- \n!dos : ------- \n!pect : -------"
        msg.reply(commande);
    }
    if (msg.content === "!jambes") {
        let messageT = "";
        messageT = "```     **Les jambes**\n\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg```"
        msg.channel.send(messageT);
        // msg.channel.send('Message that goes above image', {
        //     files: [
        //         "https://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        //     ]
        // });
    }
    if (msg.content === "!fessier") {
        msg.channel.send("fessier");
    }
    if (msg.content === "!bras") {
        msg.channel.send("bras");
    }
    if (msg.content === "!abdos") {
        msg.channel.send("abdos");
    }
    if (msg.content === "!dos") {
        msg.channel.send("dos");
    }
    if (msg.content === "!pect") {
        msg.channel.send("pect");
    }

});


bot.login(token);
