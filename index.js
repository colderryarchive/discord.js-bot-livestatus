const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")
const { token } = require("./config.json")
const client = new discord.Client(
  {
    disableEveryone: true
  }
)

client.on("ready", () => {

  setInterval(function() {

    let guild = client.guilds.cache.get("Your Guild ID");

    let user = guild.members.cache.get("Your Client ID") // Fun Fact: You can use your id too for getting your status lol

    let status = user.presence.status // For getting the user presence.

    client.channels.cache.get("Channel ID").messages.fetch("Message ID").then(msg => {

      // Embed for offline.
      let offline = new MessageEmbed()
        .setTitle("Status")
        .setDescription("AiChan is Offline :red_circle:")
        .setColor("RED")
        .setTimestamp()
                                                // Replace the AiChan with your bot name
      // Embed for online, dnd and idle.
      let online = new MessageEmbed()
        .setTitle("Status")
        .setDescription("AiChan is Online :green_circle:")
        .setColor("GREEN")
        .setTimestamp()

      if (status === "online") {
        msg.edit(online)
      } else {
        if (status === "dnd") {
          msg.edit(online)                      // You can make embeds for dnd and idle. Be creative :D
        } else {
          if (status === "idle") {
            msg.edit(online)
          } else {
            if (status === "offline") {
              msg.edit(offline)
            }
          }
        }
      }
    }).catch(err => {})
  }, 20000) // Time set in milliseconds. 1000 = 1 second.

  console.log("AiChan is now online")
})

// We'll first use this for getting the message id
client.on("message", async message => {

  if (message.content === "c!execute") {

    let execute = new MessageEmbed()
      .setTitle("Status")
      .setDescription("AiChan is Online :green_circle:")
      .setColor("GREEN")
      .setTimestamp()

    return message.channel.send(execute)

  }
})

// Coded By Colderry
client.login(token)
