const chalk = require("chalk")
const fs = require("fs")


//
global.domain = 'kyuu.tokopannep.xyz'
global.apikey = 'ptla_mPnGPknLClnC5TPcGIKG0O9e60wJInG0FXruoRsv4Bd'
global.capikey = 'ptlc_B9Jod73kSTQZGbqwc2yheWw7VGoLgL37gQYFJrASTrr'
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6289668070504'] //ur owner number
global.ownernomer = "6289668070504" //ur owner number2
global.ownername = "4K FANN BOT" //ur owner name
global.ytname = "" //ur yt chanel name
global.socialm = "jgn spam owner njg" //ur github or insta name
global.location = "jawa timur, Indonesia " //ur location

//new
global.botname = "4K FANN BOT ✆"
global.ownernumber = '6289668070504'
global.ownername = '6289668070504'
global.ownerNumber = ["6289668070504@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@BG-DARWIN"
global.websitex = "https://Bakso kontol"
global.wagc = "https://www.youtube.com/@BG-DARWIN"
global.themeemoji = '🚩'
global.wm = "𝙳𝙰𝚁𝚆𝙸𝙽"
global.botscript = 'kamu nanyeak escehnya?' //script link
global.packname = "𝙳𝙰𝚁𝚆𝙸𝙽"
global.author = "𝙳𝙰𝚁𝚆𝙸𝙽"
global.creator = "6283897387848@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'ini sayangku❤️!',
    admin: 'Fitur ini hanya dapat digunakan oleh admin!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Jika Ingin Daftar Ketik Sewa',
    owner: 'Fitur ini hanya dapat digunakan oleh pemilik',
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    private: 'Fitur Hanya Digunakan Untuk Obrolan Pribadi!',
    bot: 'Fitur ini hanya dapat digunakan oleh bot',
    wait: 'In process...',
    linkm: 'dimana tautanya?',
    endLimit: 'Batas Harian Anda Telah Kedaluwarsa, Batasan Akan Direset Setiap 12 Jam',
    nsfw: 'Fitur nsfw belum diaktifkan, silahkan menghubungi admin untuk mengaktifkan',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
