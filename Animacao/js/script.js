const bola = document.querySelector('#caixa')

document.addEventListener('keydown',animar)

function animar(evento){
    if(evento.key == 'ArrowUp'){
        bola.classList.add('bolaPular')
    }

    if(evento.key == 'ArrowDown'){
        bola.classList.remove('bolaPular')
    }

}