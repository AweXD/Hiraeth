const Discord = require(`discord.js`);
const client = new Discord.Client();

const config = require(`./config.json`);
const spawn = require(`./schedule.json`);

client.on(`ready`, () => {
// Will get PST time and display it as a prescence

	/**
	 * Time in PST (Compared to UTC -5)
	 */
	const PST = new Date(Date.now() - 10800000);
	const checkTime = dateObject => [dateObject.getDay(), dateObject.getHours(), dateObject.getMinutes()];

	/**
	 * Discord.GuildChannel object.
	 */
	const guildChannel = client.guilds.get('420258815112642561').channels.get('532793169461510145');

	setInterval(() => {
		// Check current time.
		const time = checkTime(PST);

		// Send upcoming boss.
		guildChannel.send(`${spawn[time[0]][time[2] + 1]} will spawn in ${Math.abs(time[3] - 60)}`);
	}, 60000);
});

client.login(config.token);
