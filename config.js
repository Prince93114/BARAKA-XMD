const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'mutethiatitus200@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'Kenya'
global.sudo = process.env.SUDO || '254708767812'
global.devs = '254708767812';
global.website = 'https://github.com/naveeddogar/KING-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'PRINCE-Titus' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Prince titus' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU96U3ZTUWZYaXA2R0Yxbm5LSU5Ba2JSd1ZWME9EdXhpSVpBaVFmVStrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxTY1FhZEJObWppZTluTzViNXdsMmZENXl6OWVvRGZWUVBvM29ldXlraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS2tpaVRQaHo0ZU5tcjdnUVQ2L1ptSVFGeHp4QUo2eXJoVjRmeExvTzNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIra0xQanBXMmRWUlJhMTByYWwyRWVQZ3IzanJEK3p6dUEyeEY3KzlFSjNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPbTRYOEs3Rnc1RytWWS93Q3ZpSlZOQWgwQVBhdDdMME9MbHB1Q1Vzbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1qR1FsQ1g1UEJDZWIyMFFyUUlPbHdva1JyOGdFSkJocXprcStBOThpU2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Y1eHpMU0pyQXRFSFRVbW9vOW16cVNtWGtPK2huN0Y3aVVTUFRlUzIzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnJSSUNUcEF4R01XQ1pKSjFqKzBjZGwvamdMNW9jOHVSM0VRUDc5VUJHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQvVjM2SW9mYTdzN2FKT09QSVhDNUcwdy9mZHpEL0w3S0hpdEN4c0dhanpQZmIwN0NzWS8rcWx0VVBzakJYRjNzZ2t5WkQxZnllQWdSRmJFT0toNml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6ImZHbGc3NGdIRXMrS082dU95ZFIvbldUZTFJaDJ6UkN4YXhya3dRZjkyTG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBlQmpIMmpkU09XSFRyR1NLZDJuV0EiLCJwaG9uZUlkIjoiOWNkMmZjOTctMDA5NC00NDZjLTk0ZmItOTY1ZjdjY2Y1ZDhlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVtUTNRckt1UENvcHBiUDJSRUxDaUNQODdFcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2c1cwSnY5MG1OVi96ZEs0SXN3M1JvemVtWTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0tKUU5FODIiLCJtZSI6eyJpZCI6IjI1NDcwODc2NzgxMjoyNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQcmluY2UgVGl0dXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BXemxBUVFtSk9VdGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFHMExLSnJWMnhwaTE2bXAvWVBGR1FkZXZlV0RXendnc0R5UzNKSm5aelU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFZYThWVW5BaHVncWUwdFBwcmRtN0pXejlVdHdDQmMxZ083UDlTNVdrWUJpSFNaeUZNUk1IMkE0WFpkVTlJT3U3R0lZYWFoNzZ4Mm5NWnFjUkdHNkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLUmFLZ3ZtUWd4Zm0zWTRrZmM0OTI4cVgwVStxYmlMeUtIeTF4S2pEbDFGcFdFQWx3Smh5MkFJbFFJaGJSZXZoWDBkNEVndjF6aUQvb2VRZEJOSmdnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwODc2NzgxMjoyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXaHRDeWlhMWRzYVl0ZXBxZjJEeFJrSFhyM2xnMXM4SUxBOGt0eVNaMmMxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MTg5MDk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUppdyJ9 : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR-2.0',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
