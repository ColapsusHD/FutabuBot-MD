let media = './media/menus/telegramfutabuclub.jpg'
let handler = async (m, { conn, command }) => {
let str = `
Nuestro grupo de Telegram!
Link: https://t.me/FutabuClub
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/ColapsusHD/FutabuBot-MD', '𝙵𝚞𝚝𝚊𝚋𝚞𝙱𝚘𝚝-𝙼𝙳', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', 'https://t.me/FutabuClub']
], m,)}

handler.command = /^telegram|grupodetelegram|linktelegram$/i
handler.exp = 35
export default handler
