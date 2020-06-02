const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

bot.on('ready', function () {
    console.log("Je suis pret a etre utiliser.");
    bot.user.setActivity('DO IT FOR BIG TETON!').catch(console.error);
});

bot.on("message", msg => {
    let messageT = "";
    if (msg.content === "!help") {
        const commande = "\n         -Help-         \n!jambes : ------- \n!fessier : ------- \n!bras : ------- \n!abdos : ------- \n!dos : ------- \n!pect : -------"
        msg.channel.send(commande);
    }
    if (msg.content === "!jambes") {
        messageT = "     **Les jambes**\n\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT);
        // msg.channel.send('Message that goes above image', {
        //     files: [
        //         "https://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        //     ]
        // });
    }
    if (msg.content === "!fessier") {
        messageT = "     **Le fessier**\n\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT);    }
    if (msg.content === "!bras") {
        messageT = "     **Les bras**\n\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT); 
    }
    if (msg.content === "!abdos") {
        messageT = "     **Les abdos**\n\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT); 
    }
    if (msg.content === "!dos") {
        messageT = "     **Le dos**\n\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT); 
    }
    if (msg.content === "!pect") {
        messageT = "     **Le pect**\n\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT); 
    }

});


bot.login(token);
