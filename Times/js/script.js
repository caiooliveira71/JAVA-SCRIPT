const interrogação = document.querySelector('#int')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')
const bt5 = document.querySelector('#bt5')

bt1.addEventListener('click',ba)
bt2.addEventListener('click',vi)
bt3.addEventListener('click',re)
bt4.addEventListener('click',ro)
bt5.addEventListener('click',ar)

function ba(){
    int.src = 'image/bahia.webp'
}
function vi(){
    int.src = 'image/vitoria.webp'
}
function re(){
    int.src = 'image/realmadrid.png'
}
function ro(){
    int.src = 'image/roma.png'
}
function ar(){
    int.src = 'image/arsenal.webp'
}

