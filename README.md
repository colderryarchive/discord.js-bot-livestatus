# Live-Bot-Status
Get your discord bot status. Whenever it goes offline it will update the message embed to offline when online it will update to online

## Steps to do

**1.** Copy your guild id and paste on the code

**2.** Copy your client id and same way paste on the user code
```js
    let guild = client.guilds.cache.get("Your Guild ID");

    let user = guild.members.cache.get("Your Client ID") 
```
At this point you'll be needed two things. Channel id and message id

**3.** So copy the channel id where you will be making the status thing. Then paste on the code

**4.** Use c!execute and copy the message embed id and after that paste on the code.

    client.channels.cache.get("Channel ID").messages.fetch("Message ID").then(msg => {
    
**5.** Put your bot token on config.json

## Things to know

**1.** You must have on intents for your bot on the discord developer portal.

**2.** You'll face errors first for not giving the proper message id. For that I made the interval 20 seconds so that you can get enough time for using the c!execute. After that you can change the time which is set in milliseconds.


Coded with ❤️ By Colderry.
