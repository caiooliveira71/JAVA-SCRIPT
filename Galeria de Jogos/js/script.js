const alvo = document.querySelector('#alvo')
const cyber = document.querySelector('#cyber')
const red = document.querySelector('#red')
const last = document.querySelector('#last')
let body = document.body

cyber.addEventListener('click',c)
red.addEventListener('click',r)
last.addEventListener('click',l)

function c(){
    alvo.src = 'image/Gemini_Generated_Image_epjeczepjeczepje.png'
    body.style.backgroundImage = "url('image/cyberbackground.jpeg')"
}
function r(){
    alvo.src = 'image/red dead 2.avif'
    body.style.backgroundImage = "url('image/redbackground.jpeg')"
}
function l(){
    alvo.src = 'image/Gemini_Generated_Image_cpaqxdcpaqxdcpaq.png'
    body.style.backgroundImage = "url('image/thelastofus.jpeg')"
}
