//dom
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

//eventos
setInterval(relogio,1000)

//ação
function relogio(){
    hoje = new Date()
    hour = hoje.getHours()
    minute  = hoje.getMinutes()
    second = hoje.getSeconds()

    horas.textContent = hour
    minutos.textContent = minute
    segundos.textContent = second
}