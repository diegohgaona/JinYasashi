const red = require('reddit-fetch');
module.exports = {
	name: 'animeme',
	aliases: [],
	desc: 'Weeb Memes!',
	cat: 'anime',
	cooldown: 8,
	run: (bot, msg, args) => {
		red({
			subreddit: 'animememes',
			sort: 'hot',
			allowNSFW: false,
			allowModPost: false,
			allowCrossPost: false,
			allowVideo: false
		})
			.then(post => {
				try {
					msg.channel.createMessage({
						embed: {
							color: bot.color,
							title: post.title,
							image: { url: post.url },
							timestamp: new Date()
						}
					});
				} catch (e) {
					console.error(e);
					return msg.channel.error("I didn't find memes!");
				}
			})
			.catch(e => {
				console.error(e);
				return msg.channel.error("I didn't find memes!");
			});
	}
};
