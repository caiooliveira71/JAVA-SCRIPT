//dom
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#botao')
const resultado1 = document.querySelector('#resultado1')
const resultado2 = document.querySelector('#resultado2')

//evento
botao.addEventListener('click',imc)

//ação
function imc(){
    p = Number(peso.value)
    a = Number(altura.value)
    calculo = p/(a*a)

    resultado1.textContent = `O seu imc é ${calculo.toFixed(2)}`

    if(calculo <18.5){
        resultado2.textContent = `Você é magro`
    }
    else if(18.5 <= calculo && calculo <= 24.9){
        resultado2.textContent = `Você esta com o peso normal`
    }
    else if(25 <= calculo && calculo <= 29.9){
        resultado2.textContent = `Você esta com excesso de peso`
    }
    else{
        resultado2.textContent = `voce esta com obesidade`
    }
}