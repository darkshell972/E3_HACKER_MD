const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FkeEJ3YUdFV0J2RVd5SU9Qemo3ODNMd3lRTHVhM2ppZmNmSU15RzRWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVJHS3hmeVFDY0U3cWNVV083Yy9RQlJYblRFNkF2Q0N4Zjlvc3REVVV5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRVNHYis3VjlaUXlRZnV2ekc5T1V6VXF0MXNUMU1wVFk4NWRHS0wvVzIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3RzdPTDNDL3BnOThJVlJyTzNKVG1uYXBHcGhuQzVBY2dua2hiTmZTNlVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLVXRxazhwbGV4b0tRYXQyNFlCUEEybWE4U3d1L3RydEFGSnJ1TWpzRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFkMEdGUEVTc012Z3ZxdmE2UEwvdmJDY0V6czRPWS9vVEFzRmRUSE4yVTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZxV25sanBxS2NZcHVraDEwdTZ0cVhIa3JrZXlwWWNzeHprUEkzUXMxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3lJOHNsVWo0a01TM0VuQW5DVkVoTjl0bEdhTXJrcWpnRUpYNkZqVmtUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcwaCt1czZJYlVTOFBXbHExTE5ENDZNWEFNQm1FTnBCSjMySC9OL3hkUGRrVDc2aTFXRGsvMExwOGEvZWxxcGplS3QvZm9GVDFGSXoyU1pyUEgwTENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJDS09yYWI5Vlo5OER0RHFIcHpxYzRlWDgrYXF5Qmc3dFg3RE5jV1BLRlJFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5NDQwMDM4Mjg5MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0NkVENkNEMUI4REJFNkJBOEVGNjhEMDgzODUwQ0VBNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MTM1Njk4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTQ0MDAzODI4OTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0JCNTA0QTNCRkYwMzk3ODk2RUE2QzA1NUQyRUVGQjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjEzNTY5OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTk0NDAwMzgyODkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkwQzg5Q0QyNUI1MjA5OTRGRDgyMjk2ODBFNTUyQjUwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMzU3MDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlFDNlA0UEU0IiwibWUiOnsiaWQiOiI5OTQ0MDAzODI4OTA6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJqcyIsImxpZCI6IjExNTM4NDkzMzk4NjMzOToxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0R2aUtjQkVJMkNzc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiemdFZVFESnBTTHNjNTZvUWRBUlJYTHRIRGNkTXM5VnZkNlhNY0s3NXlnWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiejVENnlEd2d4TEJpQXowY2pkR2U2K3FrNGF3SExKNUNmc3Z1akI2ZUJ0dUVBc1JVdThPdDVGdFRaNXQ4RWU0VUNYaCtVcjRmcnl0OWJIOXZBS3ZXQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IldJTk1JMXlyUThaKzhYb3YyUU9vSWg1WVpCVVdrZnA2MnZ2Um10K01EcmN3UDcrZTY0VG4vcFdmZ3VVTmU1WTRhc3p3ZEhtTGVRSzE5WWZkK1hrNERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTk0NDAwMzgyODkwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzRCSGtBeWFVaTdIT2VxRUhRRVVWeTdSdzNIVExQVmIzZWx6SEN1K2NvRyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MTM1Njk3LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzlBIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
