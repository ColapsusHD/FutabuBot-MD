//let media = './media/menus/telegramfutabuclub.jpg'
let handler = async (m, { conn, command }) => {
let str = `
------------Futabu Club------------

📝| Reglas:

• *Respeto* (Respeta a toda la comunidad y a los admins)
• *No Doxeo* (Prohibido compartir información privada de alguien, como dirección, dni o datos personales, etc)
• *No Toxicidad* (Nada de insultos o humor muy negro hacia esa X persona si el/ella no le gusta ese comportamiento)
• *No Spam* (No spam de links, stickers o redes sociales, almenos que un admin te dio su permiso)
• *No Binarios o Inmune* (Nada de binarios o inmune que llegara a crashear WhatsApp por un archivo multimedia)
• *No Gore* (Nada de sangre o stickers sangriento o subidos de tono)
• *No CP* (No se permite el CP [Children Porn o Porno de niños])
• *No Acoso* (Nada de estar acosando a los miembros/admins por privado)
• *No Mandar Packs* (No se permite mandar packs de alguien o propios, como lo puede ser packs de tetas o pene [Eso si packs de transexuales si se permite pero no propios])
• *No Scat* (Esta totalmente prohibido el pasar contenido Scat, en pocas palabras es porno de 💩 [Literalmente])
• *No Earfuck* (No se permite esto ya que a muchos no le llegan a gustar, es que le meten el pene por la oreja y se lo follan eso es Earfuck)
• *No Flood* (No se permite el flood que es enviar mil veces esa misma letra explotando el chat con tanta repetición de esa misma acción)

✅| Se permite hentai/porno de transexuales pero la temática tiene que ser más de Futanari.
`.trim()
  
conn.sendHydrated(m.chat, str, wm, null, 'https://github.com/ColapsusHD/FutabuBot-MD', '𝙵𝚞𝚝𝚊𝚋𝚞𝙱𝚘𝚝-𝙼𝙳', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}

handler.command = /^reglas|rules|reglasgrupo|rulesgrupo|rulesgroup$/i
handler.exp = 35
export default handler
