import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
//let com = `${usedPrefix}`
//let juegos = `${pickRandom([`${com}formarareja`,`${com}reto`,`${com}verdad`])}`   



const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
  
if (command == 'multijuegos') { 
  global.db.data.users[m.sender].limit += 2
              //let emojis3 = `${pickRandom([`🛸`,`🚁`,`🚀`,`🧠`,`✈️`,`🚤`,`🚢`,`🚗`])}`
            //let s = `Bienvenido al Multijuegos Aleeatorios`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', url: 'https://github.com/GataNina-Li/GataBot-MD'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gata_dios/'}},
{index: 3, quickReplyButton: {displayText: '𝙄𝙣𝙞𝙘𝙞𝙖𝙧 | 𝙎𝙩𝙖𝙧𝙩', id: '.juegos'}},
{index: 4, quickReplyButton: {displayText: '𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', id: '#juegosmenu'}},
{index: 5, quickReplyButton: {displayText: '𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', id: '#menu'}},
]
 
let t = {
text: global.wm,
footer: `𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤(𝙖) 𝙅𝙪𝙚𝙜𝙖 𝙪𝙣𝙖 𝙂𝙧𝙖𝙣 𝙫𝙖𝙧𝙞𝙚𝙙𝙖𝙙 𝙙𝙚 𝙟𝙪𝙚𝙜𝙤𝙨!!`,
templateButtons: templateButtonsReplyMessage
  }
conn.sendMessage(m.chat, t, m)
}
  
  
  if (command == 'juegos') { 
    global.db.data.users[m.sender].money += 5
    
             let c = `${usedPrefix}`
              let juegos = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}topgays`,`${c}topotakus`,`${c}mates medium`,`${c}mates noob`])}`
               let juegos2 = `${pickRandom([`${c}reto`,`${c}verdad`,`${c}formarpareja`,`${c}ppt tijeras`,`${c}ppt piedra`])}`
                let juegos3 = `${pickRandom([`${c}gay`,`${c}ppt papel`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                 let emojis1 = `${pickRandom([`🦁`,`🐮`,`🦖`,`👻`,`🐈`,`🐆`,`🐅`,`🐒`])}`
                  let emojis2 = `${pickRandom([`💟`,`☮️`,`☪️`,`☯️`,`🕉️`,`☸️`,`✡️`,`🔯`])}`
                   let emojis3 = `${pickRandom([`🛸`,`🚁`,`🚀`,`🧠`,`✈️`,`🚤`,`🚢`,`🚗`])}`
              

              let ss = await `Use los botones`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', url: 'https://github.com/GataNina-Li/GataBot-MD'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gata_dios/'}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos2}},
{index: 5, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis3}`, id: juegos3}},
]
 
let tt = {
text: ss,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, tt, m)
} 
    
  
 if (command == 'juegos') {
   global.db.data.users[m.sender].money += 10
            let c = `${usedPrefix}`
             let juegos = `${pickRandom([`${c}lesbiana Yo`,`${c}doxxear`,`${c}pajero Yo`,`${c}love Tú Mejor Amigo/a`,`${c}reto`,`${c}verdad`,`${c}ppt piedra`,`${c}puta Yo`,`${c}mates medium`,`${c}simi Que`])}`
              let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
               let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                let emojis1 = `${pickRandom([`😃`,`😳`,`🤑`,`🤠`,`🤭`,`😇`,`😋`,`🥴`])}`
                 let emojis2 = `${pickRandom([`🕵🏻‍♀️`,`🕵🏽‍♀️`,`🕵🏻‍♂️`,`🕵🏾‍♂️`,`👩🏿‍⚕️`,`🧑🏿‍⚕️`,`👩🏻‍⚕️`,`🧑🏻‍⚕️`,`👩🏼‍⚕️`,`🧑🏼‍⚕️`,`👩🏻‍🍳`,`🧑🏽‍🍳`,`👩🏾‍🍳`,`🧑🏿‍🍳`,`👩🏻‍🎓`,`👩🏼‍🎓`,`🧑🏾‍🎓`,`🧑🏻‍🎓`,`👩🏿‍🚀`,`🧑🏾‍🚀`,`👩🏽‍🚀`,`🧑🏽‍🚀`,`👩🏻‍⚖️`,`🧑🏻‍⚖️`,`👩🏽‍⚖️`,`🧑🏾‍⚖️`,`👩🏼‍⚖️`,`🧑🏼‍⚖️`,`🧙🏾‍♀️`,`🧙🏾‍♂️`,`🧙🏻‍♀️`,`🧙🏻‍♂️`,`🧚🏻‍♀️`,`🧚🏻‍♂️`,`🧚🏿‍♀️`,`🧚🏿‍♂️`,`🧚🏽‍♀️`,`🧚🏽‍♂️`,`🧞‍♀️`,`🧞‍♂️`,`👩🏻‍🎨`,`👩🏼‍🎨`,`👩🏿‍🎨`,`🧑🏻‍🎨`,`🧑🏼‍🎨`,`🧑🏿‍🎨`])}`
                  let emojis3 = `${pickRandom([`🍑`,`🍒`,`🍕`,`🍡`,`🍨`,`🥧`,`🍜`,`🍛`,`🍫`,`🫒`,`🍆`,`🍩`,`🍪`,`🍿`])}`

           let sss = await `Use los botones`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', url: 'https://github.com/GataNina-Li/GataBot-MD'}},
{index: 2, urlButton: {displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/gata_dios/'}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos2}},
{index: 5, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis3}`, id: juegos3}},
]
let ttt = {
text: sss,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
} 
conn.sendMessage(m.chat, ttt, m)
}
  
  if (command == 'juegos') { 
    global.db.data.users[m.sender].exp += 20
                 let c = `${usedPrefix}`
                  let juegos = `${pickRandom([`${c}lesbiana Yo`,`${c}doxxear`,`${c}pajero Yo`,`${c}love Tú Mejor Amigo/a`,`${c}reto`,`${c}verdad`,`${c}ppt piedra`,`${c}puta Yo`,`${c}mates medium`,`${c}simi Que`])}`
                   let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
                    let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                     let emojis1 = `${pickRandom([`🎄`,`🌲`,`🌴`,`🌱`,`🌿`,`☘️`,`🍀`,`🪴`,`🍃`,`🍂`,`🍁`,`🍄`,`🌷`,`🌹`,`💐`,`🌼`,`🌻`,`🌺`,`🌸`])}`
                      let emojis2 = `${pickRandom([`❤️`,`🧡`,`💛`,`💚`,`💙`,`💜`,`🖤`,`💔`,`❤️‍🔥`,`❤️‍🩹`,`❣️`,`💕`,`💞`,`💓`,`💗`,`💖`,`💘`,`💝`])}`
                       let emojis3 = `${pickRandom([`🥊`,`🥋`,`🎣`,`🎊`,`🎉`,`🪄`,`🎈`,`✨`,`⭐`,`💫`,`🌟`,`🌈`,`🔥`,`💥`,`☃️`,`❄️`,`⛱️`,`🗿`,`🔮`])}`
         
                 let ssss = await `Use los botones`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos2}},
{index: 5, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis3}`, id: juegos3}},
]
let tttt = {
text: ssss,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
  
  
      
   if (command == 'juegos') { 
      global.db.data.users[m.sender].exp += 20
                 let c = `${usedPrefix}`
                  let juegos2 = `${pickRandom([`${c}ppt piedra`,`${c}mates noob`,`${c}pregunta El cielo y el infierno existen?`,`${c}pregunta Hay una sola vida?`,`${c}pregunta Los robots y androides podrán tener sentimientos en algún momento?`,`${c}pregunta De verdad el universo es infinito?`,`${c}pajera Yo`,`${c}manca Yo`,`${c}manco Yo`,`${c}pregunta Hay un destino?`,`${c}pregunta Se puede tener todo lo que se quiere?`])}`
                   let juegos3 = `${pickRandom([`${c}puto Él de arriba`,`${c}puta La de arriba`,`${c}pregunta Se puede viajar en el tiempo?`,`${c}pregunta Hay un solo Universo?`,`${c}rata Yo`,`${c}mates impossible`,`${c}prostituto Yo`,`${c}prostituta Yo`,`${c}pregunta Soy Pro en el Grupo?`,`${c}mates impossible2`,`${c}rata Yo`])}`
                    let emojis1 = `${pickRandom([`🏳️`,`🏴`,`🏴‍☠️`,`🏁`,`🚩`,`🏳️‍🌈`,`🏳‍⚧`,`🇧🇷`,`🇨🇱`,`🇦🇷`,`🇧🇴`,`🇻🇪`,`🇭🇳`,`🇺🇾`,`🇨🇴`,`🇵🇪`,`🇵🇦`,`🇳🇮`,`🇬🇹`,`🇨🇺`,`🇨🇷`,`🇭🇹`,`🇩🇴`,`🇲🇽`,`🇸🇻`,`🇬🇾`,`🇺🇸`,`🇨🇦`,`🇱🇨`,`🇪🇨`])}`
                     let emojis2 = `${pickRandom([`🌁`,`🌉`,`🌌`,`🌃`,`🏙️`,`🌆`,`🌇`,`🎆`,`🎇`,`🌠`,`🌄`,`🌅`,`🏞️`,`🎑`,`🗾`,`🏜️`,`🏝️`,`🏖️`,`🗼`,`🗽`,`🗺️`,`🏗️`])}`
         
                 let ssss = await `Use los botones`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: null, url: null}},
{index: 2, urlButton: {displayText: null, url: null}},
{index: 3, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis1}`, id: juegos2}},
{index: 4, quickReplyButton: {displayText: `𝙅𝙪𝙜𝙖𝙧 ${emojis2}`, id: juegos3}},
{index: 5, quickReplyButton: {displayText: '🎁 𝙈𝙖𝙨 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙍𝙚𝙨𝙩𝙖𝙧𝙩', id: '#juegos'}},
]
let tttt = {
text: ssss,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
  } 
conn.sendMessage(m.chat, tttt, m)  
}
 }
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = ['multijuegos', 'juegos']
handler.group = true
//handler.exp = 200
//handler.money = 200
export default handler
                              
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
