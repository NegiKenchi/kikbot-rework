exports.run = (client, message, args)  => {
	const Discord = require('discord.js');

		message.react(`🏓`);
message.channel.sendMessage(message.author + ' 📡 **|** `'+Math.round(client.ping)+'ms` (Shard: '+`**${client.shard.id + 1}**`+'/2)')
}
