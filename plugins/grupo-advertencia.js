let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, `${ag}𝙇𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 *#on antitoxicos* 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝘼, 𝘿𝙀𝘽𝙀 𝘿𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘿𝙄𝘾𝙃𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n\n𝙏𝙃𝙀 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 *#on antitoxic* 𝙄𝙎 𝘿𝙀𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀𝘿, 𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝘼𝘾𝙏𝙄𝙑𝘼𝙏𝙀 𝙏𝙃𝙄𝙎 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝙏𝙊 𝙐𝙉𝙇𝙊𝘾𝙆 𝙏𝙃𝙄𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿`, fkontak, m) 
let who
let img = 'https://i.imgur.com/DvHoMc3.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙍𝙀𝘾𝙄𝘽𝙄𝙍 𝙇𝘼 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 ⚠️\n\n𝙏𝘼𝙂 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝙃𝙊 𝙒𝙄𝙇𝙇 𝙍𝙀𝘾𝙀𝙄𝙑𝙀 𝙏𝙃𝙀 𝙒𝘼𝙍𝙉𝙄𝙉𝙂⚠️\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} 𝙍𝙀𝘾𝙄𝘽𝙄𝙊 𝙐𝙉𝘼 𝘼𝘿𝙑𝙀𝙉𝙏𝙀𝙉𝘾𝙄𝘼 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!\n\n𝙄 𝙍𝙀𝘾𝙀𝙄𝙑𝙀𝘿 𝘼 𝙒𝘼𝙍𝙉𝙄𝙉𝙂 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋!!`, `*ADVERTENCIA : WARNING*\n⚠️ *${user.warn}/4*\n\n${wm}`, img, [
[`😭 𝙇𝙊 𝙎𝙄𝙀𝙉𝙏𝙊 | 𝙄'𝙈 𝙎𝙊𝙍𝙍𝙔`, '.ok'],
['🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔', '.inventario'],
['☘️ 𝙈𝙀𝙉𝙐', '/menu']], false, { mentions: [who] }) //[m.sender]
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`𝙏𝙀 𝙇𝙊 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿 𝙑𝘼𝙍𝙄𝘼𝙎 𝙑𝙀𝘾𝙀𝙎!!\n*@${who.split`@`[0]}* 𝙎𝙐𝙋𝙀𝙍𝘼𝙎𝙏𝙀 𝙇𝘼𝙎 *4* 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼𝙎 𝘼𝙃𝙊𝙍𝘼 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼) 🙄\n\n𝙔𝙊𝙐 𝙋𝘼𝙎𝙎𝙀𝘿 𝘼𝙇𝙇 *4* 𝙒𝘼𝙍𝙉𝙄𝙉𝙂𝙎 𝙉𝙊𝙒 𝙔𝙊𝙐 𝙒𝙄𝙇𝙇 𝘽𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙏𝙀𝘿 😐`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') //@${m.sender.split`@`[0]}
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(advertir|advertencia|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
