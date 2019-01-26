const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const spawn = require('./schedule.json');

client.on('ready', () => {
	const checkTime = dateObject => [dateObject.getDay(), dateObject.getHours(), dateObject.getMinutes()];

	/**
	 * Time in PST (Compared to UTC -5)
	 */
	const PST = new Date(Date.now() - 10800000);
	const currentTime = checkTime(PST);

	/**
	 * Discord.GuildChannel object.
	 */
	const guildChannel = client.guilds.get('420258815112642561').channels.get('532793169461510145');

	/**
	 * Function to check for the next boss.
	 */
	const checkBoss = (day, hour) => spawn[day][hour];

	setInterval(() => {
		// Check for the next boss.
		for (let [DD, HH, MM] = currentTime; ; HH++) {
			if (HH >= 24) HH = '00';
			if (DD >= 7) DD = 0;

			const boss = checkBoss(DD, `${HH}:${HH >= 17 ? '15' : '00'}`);
			if (!boss) continue;

			return guildChannel.send(`${boss} will spawn in ${Math.abs(MM - 60)}`);
		}
	}, 60000);
});

client.login(config.token);
