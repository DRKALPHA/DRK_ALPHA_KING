const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: "📜",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
     }

let madeMenu = `*Hello ${pushname}*

> *DOWNLOAD COMMANDS* ⬇️

${menu.download}

> *MAIN COMMANDS* ⚙️

${menu.main}

> *SEARCH COMMANDS* 📡

${menu.search}

> *GROUP COMMANDS* ✵

${menu.group}

> *OWNER COMMANDS* 🧑‍🔧

${menu.owner}

> *CONVERT COMMANDS*

${menu.convert}

⚔ POWERD BY DRK DEVELOPER ⚔
`
await conn.sendMessage(form,{image:{url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2FAlphaKingYT%2F&psig=AOvVaw1hIRn3iahHaOP3F49jFzq0&ust=1728090467968000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKj5pvXE84gDFQAAAAAdAAAAABAE"},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply('${e}')
  }
})
