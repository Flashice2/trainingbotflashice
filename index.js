const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

bot.on('ready', function () {
    console.log("Je suis pret a etre utiliser.");
    bot.user.setActivity('DO IT FOR BIG TETON!').catch(console.error);
});

    // msg.channel.send('Message that goes above image', {
    //     files: [
    //         "https://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
    //     ]
    // });

bot.on("message", msg => {
    let messageT = "";
    if (msg.content === "!help") {
        const commande = "\n         -Help-         \n!jambes : mollet, cuisses \n!fessier : fessier \n!bras : biceps, triceps, avants bras \n!abdos : abdominaux, obliques \n!dos : lombaire, dorso \n!pect : pectoraux"
        msg.channel.send(commande);
    }
    if (msg.content === "!jambes") {
        messageT = "__***     Les jambes     ***__\n Voici ttout les exercices du bas  du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=lower-body&page=1\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT);

    }
    if (msg.content === "!fessier") {
        messageT = "__***     Le fessier     ***__\n Voici ttout les exercices du bas  du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=lower-body&page=1\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT);    }
    if (msg.content === "!bras") {
        messageT = "__***     Les bras     ***__\n Voici ttout les exercices du haut du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT); 
    }
    if (msg.content === "!abdos") {
        messageT = "__***     Les abdos     ***__\n Voici tout les exercices des abdos: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=abs&page=1\n https://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT); 
    }
    if (msg.content === "!dos") {
        messageT = "__***     Le dos     ***__\n Voici ttout les exercices du haut du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT); 
    }
    if (msg.content === "!pect") {
        messageT = "__***     Le pect     ***__\n Voici ttout les exercices du haut du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1\nhttps://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
        msg.channel.send(messageT); 
    }
    if (msg.content === "!epaule") {

    }
    if (msg.content === "!credit") {
        messageT = "__***     Les crédits     ***__\nBy: Antoine Bédard\n2020-06-01"
        msg.channel.send(messageT); 
    }

});


bot.login(token);
