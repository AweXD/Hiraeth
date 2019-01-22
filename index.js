const Discord = require(`discord.js`);
const client = new Discord.Client();
const config = require(`./config.json`);
client.login(config.token);
client.on(`ready`, () => {
// Will get PST time and display it as a prescence
	function mytimer() {
		const pst = new Date(Date.now() - 10800000);
		client.user.setActivity(`${pst.getHours()} :  ${pst.getMinutes()}  PST`);
		console.log(`${pst.getHours()} :  ${pst.getMinutes()}  PST`);

		// Spawn timer for Monday
		if (pst.getDay() === 1) {
			const spawn = require(`./schedule.json`);
			if (pst.getHours() === 23) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn['Monday']['00:00']} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn['Monday']['00:00']} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn['Monday']['00:00']} will spawn in <1min!`);
			}
			if (pst.getHours() === 2) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`03:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`03:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`03:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 6) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`07:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`07:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`07:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 9) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`10:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`10:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`10:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 13) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`14:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`14:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`14:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 16) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`17:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`17:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`17:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 19) {
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`20:15`]} will spawn in 30mins!`);
			}
			if (pst.getHours() === 20) {
				if (pst.getMinutes() === 0) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`20:15`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 14) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`20:15`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 21) {
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`22:15`]} will spawn in 30mins!`);
			}
			if (pst.getHours() === 22) {
				if (pst.getMinutes() === 0) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`22:15`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 14) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Monday`][`22:15`]} will spawn in <1min!`);
			}
		}
		// Spawn Timers for Tuesday
		if (pst.getDay() === 2) {
			const spawn = require(`./schedule.json`);
			if (pst.getHours() === 23) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`00:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`00:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`00:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 2) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`03:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`03:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`03:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 6) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`07:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`07:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`07:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 9) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`10:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`10:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`10:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 13) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`14:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`14:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`14:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 16) {
				if (pst.getMinutes() === 30) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`17:00`]} will spawn in 30mins!`);
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`17:00`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 59) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`17:00`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 19) {
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`20:15`]} will spawn in 30mins!`);
			}
			if (pst.getHours() === 20) {
				if (pst.getMinutes() === 0) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`20:15`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 14) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`20:15`]} will spawn in <1min!`);
			}
			if (pst.getHours() === 21) {
				if (pst.getMinutes() === 45) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`22:15`]} will spawn in 30mins!`);
			}
			if (pst.getHours() === 22) {
				if (pst.getMinutes() === 0) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`22:15`]} will spawn in 15mins!`);
				if (pst.getMinutes() === 14) client.guilds.get(`420258815112642561`).channels.get(`532793169461510145`).send(`${spawn[`Tuesday`][`22:15`]} will spawn in <1min!`);
			}
		}
	}
	setInterval(mytimer, 60000);
});
