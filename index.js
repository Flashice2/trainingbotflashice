const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const Commands = [];
const cmdFiles = readdirSync("./commands").filter((file) =>
    file.endsWith(".js"),
);

bot.on('ready', async function () {
    console.log("Je suis pret a etre utiliser.");
    bot.user.setActivity('DO IT FOR BIG TETON!').catch(console.error);

    for (const fileName of cmdFiles) {
    	const File = require(`./commands/${fileName}`);
    	Commands.push(File);
    	await bot.api.applications(bot.user.id).commands.post({
    		data: {
    			name: File.name,
    			description: File.description,
    			options: File.options,
    		},
    	});
    }
});

// msg.channel.send('Message that goes above image', {
//     files: [
//         "https://www.darebee.com/images/workouts/pretty-little-monster-workout.jpg"
//     ]
// });

bot.on("message", msg => {
    let messageT = "";
    if (msg.content === "!help") {
        const commande = "\n         -Help-         \n!jambes : mollet, cuisses \n!fessier : fessier \n!bras : biceps, triceps, avants bras \n!abdos : abdominaux, obliques \n!dos : lombaire, dorso \n!flex : flexibilité\n!pect : pectoraux\n!epaule : epaule\n !fullbody\n!lowerbody\n!upperbody"
        msg.channel.send(commande);
    }
    if (msg.content === "!jambes") {
        messageT = "__***     Les jambes     ***__\n Voici tout les exercices du bas  du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=lower-body&page=1"
        msg.channel.send(messageT);

    }
    if (msg.content === "!fessier") {
        messageT = "__***     Le fessier     ***__\n Voici tout les exercices du bas  du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=lower-body&page=1"
        msg.channel.send(messageT);
    }
    if (msg.content === "!bras") {
        messageT = "__***     Les bras     ***__\n Voici tout les exercices du haut du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1"
        msg.channel.send(messageT);
    }
    if (msg.content === "!abdos") {
        messageT = "__***     Les abdos     ***__\n Voici tout les exercices des abdos: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=abs&page=1"
        msg.channel.send(messageT);

        msg.channel.send("Normal", {
            files: [
                "https://darebee.com/images/workouts/epic-abs-workout.jpg"
            ]
        });
        msg.channel.send("Normal", {
            files: [
                "https://darebee.com/workouts/cardio-crunch-workout.html#sets"
            ]
        });
    }
    if (msg.content === "!dos") {
        messageT = "__***     Le dos     ***__\n Voici tout les exercices du haut du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1"
        msg.channel.send(messageT);

    }
    if (msg.content === "!flex") {
        messageT = "__***     Le flex     ***__\n "
        msg.channel.send(messageT);
        msg.channel.send("Light", {
            files: [
                "https://darebee.com/workouts/morning-stretch-workout.html"
            ]
        });
    }
    if (msg.content === "!pect") {
        messageT = "__***     Le pect     ***__\n Voici tout les exercices du haut du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1"
        msg.channel.send(messageT);

    }
    if (msg.content === "!epaule") {

    }
    if (msg.content === "!fullbody") {
        messageT = "__***     Full body     ***__\n Voici tout les exercices du full body du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=full-body&page=1"
        msg.channel.send(messageT);
        msg.channel.send("Normal", {

            files: [
                "https://darebee.com/images/workouts/master-plan-workout.jpg"
            ]
        });
        msg.channel.send("Normal", {
            files: [
                "https://darebee.com/images/workouts/top-of-the-world-workout.jpg"
            ]
        });
        msg.channel.send("Hard", {
            files: [
                "https://darebee.com/images/workouts/into-the-fire-workout.jpg"
            ]
        });
        msg.channel.send("Difficile", {
            files: [
                "https://darebee.com/workouts/make-my-day-workout.html#timer"
            ]
        });
        msg.channel.send("Normal", {
            files: [
                "https://darebee.com/workouts/homemade-hero-workout.html#hiittimer"
            ]
        });
    }
    if (msg.content === "!lowerbody") {
        messageT = "__***     Lower body     ***__\n Voici tout les exercices du bas du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=lower-body&page=1"
        msg.channel.send(messageT);

    }
    if (msg.content === "!upperbody") {
        messageT = "__***     Upper body     ***__\n Voici tout les exercices du haut du corps: https://www.darebee.com/filter#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1"
        msg.channel.send(messageT);

    }
    if (msg.content === "!credit") {
        messageT = "__***     Les crédits     ***__\nBy: Antoine Bédard\n2020-06-01"
        msg.channel.send(messageT);

    }

});

bot.ws.on("INTERACTION_CREATE", (interaction) => {
    const CMDFile = Commands.find(
        (cmd) => cmd.name.toLowerCase() === interaction.data.name.toLowerCase(),
    );
    if (CMDFile)
        CMDFile.execute(bot, say, interaction, interaction.data.options);
});

bot.login(token);

async function say(interaction, content) {
	return bot.api
		.interactions(interaction.id, interaction.token)
		.callback.post({
			data: {
				type: 4,
				data: await createAPIMessage(interaction, content),
			},
		});
}

async function createAPIMessage(interaction, content) {
	const apiMessage = await APIMessage.create(
		bot.channels.resolve(interaction.channel_id),
		content,
	)
		.resolveData()
		.resolveFiles();
	return { ...apiMessage.data, files: apiMessage.files };
}