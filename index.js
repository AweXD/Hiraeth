const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const spawn = require('./schedule.json');

client.on('ready', () => {
	/**
	 * Time in PST (Compared to UTC -5)
	 */
	const PST = new Date(Date.now() - 10800000);
	const currentTime = [PST.getDay(), PST.getHours(), PST.getMinutes()];

	/**
	 * Discord.GuildChannel object.
	 */
	const guildChannel = client.guilds.get('420258815112642561').channels.get('532793169461510145');

	setInterval(() => {
		// Check for the next boss.
		for (let [DD, HH, MM] = currentTime; ;) {
			const hourString = HH.toString().length > 2 ? HH : `0${HH}`;
			const boss = spawn[DD][`${hourString}:${HH >= 17 ? '15' : '00'}`];
			if (boss) return guildChannel.send(`${boss} will spawn in ${Math.abs(MM - 60)}`);

			HH += 1;
			if (HH >= 24) {
				HH = 0;
				DD += 1;
			}
			if (DD >= 7) DD = 0;
			continue;
		}
	}, 60000);
});

client.login(config.token);
