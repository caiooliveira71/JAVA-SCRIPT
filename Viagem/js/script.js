const distacia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preço = document.querySelector('#preço')
const resultado1 = document.querySelector('#resultado1')
const resultado2 = document.querySelector('#resultado2')
const calculo = document.querySelector("#calculo")

calculo.addEventListener('click',viagem)

function viagem(){
    d = Number(distacia.value)
    c = Number(consumo.value)
    p = Number(preço.value)

    calcular = (d/c)*p

    resultado1.textContent = `O valor total da sua viagem é`
    resultado2.textContent = `R$ ${calcular.toFixed(2)}`
}