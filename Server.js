//Needed to keep the bot running
const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Bot is Online`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Bot is Online") });
}
 
module.exports = keepAlive;
