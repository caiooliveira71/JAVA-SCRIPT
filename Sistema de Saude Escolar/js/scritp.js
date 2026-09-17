const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const botao = document.querySelector('#botao')
const media = document.querySelector('#media')
const situaçao = document.querySelector('#situaçao')

botao.addEventListener("click",mediafinal)

function mediafinal(){
    n1 = Number(nota1.value)
    n2 = Number(nota2.value)
    n3 = Number(nota3.value)
    calculo = (n1+n2+n3)/3

    media.textContent = `Sua Media é ${calculo.toFixed(2)}`

    if(calculo >=5){
        situaçao.textContent = `Aprovado!`
    }
    if(calculo < 5){
        situaçao.textContent = `Reprovado!`
    }
}