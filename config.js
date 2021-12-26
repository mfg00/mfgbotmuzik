module.exports = {
  Admins: ["602627713190068229", "713286920951693414"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ".", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/a9SHDpD", //Support Server Link
  Token:
    process.env.Token ||
    "OTI0NjQyMTMyMzI3ODAwODM1.YchiFw.2p49VtjYLtiWWLHaWAw9brudvhk", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "924642132327800835", //Discord Client ID
  ClientSecret:
    process.env.Discord_ClientSecret || "21f1W_JaNYlgDPdQ9tsMyKoA9yFO3xpg", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu fazla epic", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass"
  },

  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID:
      process.env.Spotify_ClientID || "75d2ec3fa90b4c549a8e559e6944bff5", //Spotify Client ID
    ClientSecret:
      process.env.Spotify_ClientSecret || "37d3736014584a22b3fa26aefa8bbb50" //Spotify Client Secret
  }
};
