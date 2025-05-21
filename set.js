const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ezra',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/9Wish882/DAVINCS-MD',
    OWNER_NAME : process.env.OWNER_NAME || "David",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "+255741640737",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'true',
    AUTO_REACT: process.env.AUTO_REACTION || "true",  
     AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/oc5rvp.jpg",  
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'true',              
    CHAT_BOT: process.env.CHAT_BOT || "off",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'yes', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || 'viewed by davincs md',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VakSTEQGZNCk6CqE9E2P",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VakSTEQGZNCk6CqE9E2P",
    CAPTION : process.env.CAPTION || "✧⁠DAVINCS_MD✧",
    BOT : process.env.BOT_NAME || '✧⁠DAVID_MD✧⁠',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Dodoma", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '2' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTI_DELETE_MESSAGE : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTI_CALL: process.env.ANTI_CALL || 'yes', 
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',             
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEk0MjhSdkQxcDdrcGxjbURJWGt6VEVzaE15bkhDcTg0L1FoNWM1ZXVrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVYODcwR0VNZVQvVmpCRmRUblZIRU9WVHJGanV2VjVDNjhOaDJrU2Rtbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSUU0enBqYUprSG82QXZ4bXFyWFVsUGtzSVA5Wm9yaFNieGFoTlJMeDIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnd2ptU2tlK1ZGRmhockRQTzNubmFtekYyT3J4WGFWRUI5RWZXUlZsdGk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVQb1ZHMEU0S0w4ekRiUEhDajFVWHZvVXp1aHZUZjFoRzE1d29rR0tzRkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhtOGJrT0JFSWVtWEVXUWM5SnVOY2tMTHFMcWRCZzF4M1JpZWVkQVJmQkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUYrQjNsVGlSQTFRd05kL2ZGZ3hZcndodS96N2NtVzNxelFONE85bW1IYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dCRXAzQUhZTUpkUzdzTi81ZHZuKzhCYklHUzUzZU1rTk50OVlkaWdTUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE0VHVUVXNFZE5ubVlvV0Nnc2JkWi9WaUl6VE1NVkxMLzNOdGpmOEZ1OUlCakYrRjJxRm8xS3IrOUE1MGV4TG5zZlJoVndoUjFxa2pDMFpkN004bUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6IktyY2ptSmREK21UWGNwTlBqTlhnNG93b3U2UFhLYWI4TUZVWUhnYTgvQms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkhKNjVQRDVBIiwibWUiOnsiaWQiOiIyNTU3NDE2NDA3Mzc6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibWQgdmlkZW9ncmFwaGVyIiwibGlkIjoiMTUzMDM1NzI1MTY5MzY6MTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdVdtZjhHRU5MZ3Q4RUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiS3F6RVRXOFcrSDNJQW84bGtGeklpQkRBTkJML0cwcG0yVzRQbzdrclhjPSIsImFjY291bnRTaWduYXR1cmUiOiJwbk8zZFZ4R0tObnAzUkRMNFUydTNHZjlkWTlqbUpkSVFjekJ4c3ZSZ3FRQ1NxLytQSDJwQWI5VXRuUDVjaFN4VWhPeTJhQVo2dG9xeldObERCRmtBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidzRhMjNNejZ2bUN2NmZLYmd4RncwbFNWNCtBdWppL092VXFSSldacU53dElMUnpJN296SStvMHVLcDdlY3gydWRYR2Q3MjhFanUxd1RLVVdZNmQzQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NDE2NDA3Mzc6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3lxc3hFMXZGdmg5eUFLUEpaQmN5SWdRd0RRUy94dEtadGx1RDZPNUsxMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ3ODQxMTIwLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJJaiJ9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, 
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

