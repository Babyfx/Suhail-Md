const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="burtonbilly432@gmail.com"
global.location="Kampala Uganda."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kampala/uganda";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256755095276";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_13_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3LFxuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0LFxuICAgICAgICA5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTWN3Y1lKbFhYaHNpcFc5UUxqOEFQT1NzUVB6QTBkMk1jMEFlVmFBREhUcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NTUwOTUyNzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4NjhGMjM5QkFFQUJEMTNDRUQ5QURFODQwMzA0RDAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI4NTk5NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc1NTA5NTI3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNENCRDY1M0NBRjE0RTA0RTNFQ0Q4MTU0RjVDNkQ0NUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjg1OTk0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInN1aDUtYjJCUXFtRXI1UnI2UEJWV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDEyNmQxYTAtMzU5Mi00MzE3LWFkNzgtNzQwNWUxODQxZTdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDE1MixcbiAgICAgIDE5MSxcbiAgICAgIDAsXG4gICAgICAyNTEsXG4gICAgICA0OSxcbiAgICAgIDc5LFxuICAgICAgMjM1LFxuICAgICAgMjI1LFxuICAgICAgMjAsXG4gICAgICAyMDgsXG4gICAgICA2MSxcbiAgICAgIDI1NCxcbiAgICAgIDE4LFxuICAgICAgMTI3LFxuICAgICAgMTg3LFxuICAgICAgMTMsXG4gICAgICAyNTIsXG4gICAgICAxMjgsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICA5MyxcbiAgICAgIDIzNyxcbiAgICAgIDk1LFxuICAgICAgMjUxLFxuICAgICAgOTEsXG4gICAgICAxOTAsXG4gICAgICAxNDQsXG4gICAgICAxMDYsXG4gICAgICAxMTQsXG4gICAgICAxMTksXG4gICAgICAxODcsXG4gICAgICAyMDksXG4gICAgICAxNzksXG4gICAgICAyNDQsXG4gICAgICAxMjMsXG4gICAgICA0NixcbiAgICAgIDE5OCxcbiAgICAgIDY1LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVTMTJEM1dQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTUwOTUyNzY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU3OTAwMzcxMDE3NzQyOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkc3eWVVRUVLRDJwYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsZUhEM2E2aDZxWTJwQUpvU0V4TTVhSlVDWmttZEorRmh1aGo4eDhHSWdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZZR0FnUVRmN0VSeG5EMHZGM0RGRXVYdC9TL1BzZU1hL0U0d1VvUjkrNnpUVzFtR0RCcTlsY2d4T0pmRHpNT2pYYlhTSWEzTWpQdXgzRlpQU2VzT0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNDTWFCRS9ZTzkzNXBJRXh0TzVWQlc2QjZZNS9mNGJmMVc5aVB5K1g4UW1wV2czQ3U4cGY2MVBmQzd3aGx3ZmNRbjFYRTRxLytDcWRXZFJJTjV2MGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1NTA5NTI3Njo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI4NTk4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUttdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS212Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0FNVXptaGw1SjBZUlVDQ2hCbGxsRGxtTW1uaVBYdnJtdHBZNHlzUUNaWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg2NzU3Nzc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyODU5OTExMTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| ""babyfx
  packname: process.env.PACK_NAME || ""fxbaby
  botname : process.env.BOT_NAME  || "babyfx,
  ownername:process.env.OWNER_NAME|| "Babyfx",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "BABYFX"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
