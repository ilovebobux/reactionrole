const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'reaction-message',
    run : async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Reaction role')
        .setDescription('React to obtain a role!')
        .setColor("GREEN")

        const msg = await message.channel.send(embed)
        await msg.react('your emoji')
    }
}
