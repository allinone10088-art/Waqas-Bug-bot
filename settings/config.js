const fs = require('fs')

const config = {
    owner: "7394135548",
    botNumber: "8406580705:AAFBPYGpHP9TT6u45CeTmBKS0aJj64_vKtM", // GA USAH DI ISI NTR ERROR 
    setPair: "LUFFYFNZ", //JANGAN DI APA APAIN KLO GA MAU ERROR 
    thumbUrl: "https://files.catbox.moe/ivo4nz.jpg",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "LuffyCrasherV2",
        packname: 'Fanz×Luffy',
        description: "this script was created by @fnz4you",
        author: 'https://myalbumfanzxoffc.vercel.app',
        footer: "Luffy×Fanz - 2025`"
    },
    newsletter: {
        name: "Luffy×Fanz",
        id: "120363403004654270@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@fnz4you",
        GitHub: "https://github.com/FanzNotDev",
        Telegram: "https://t.me/fnz4you",
        ChannelWA: "https://whatsapp.com/channel/0029VaxxUio545v2bL3FE91g"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
