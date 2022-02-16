'use strict'

const lampada = document.getElementById('lampada')
const desligar = document.getElementById('desligar')
const ligar = document.getElementById('ligar')
const piscar = document.getElementById('piscar')
const resetar = document.getElementById('resetar')
let idPiscar = null


// Função responsavel por verificar se a lâpada está quebrada
const lampadaQuebrada = () => {
    return lampada.src.includes('quebrada')
}

const ligarLampada = () => {
    if(!lampadaQuebrada()){
        lampada.src = './img/ligada.jpg'
    }else{
        window-alert("Você quebrou a lâmpada 😡")
    }
}
const desligarLampada = () => {
    if(!lampadaQuebrada()){
        lampada.src = './img/desligada.jpg'
    }else{
        window-alert("Você quebrou a lâmpada 😡")
    }
}

const lampadaDesligada = () => {
    return lampada.src.includes('desligada')
}

const ligarDesligar = () => {
    if (lampadaDesligada()) {
        ligarLampada()
    }else{
        desligarLampada()
    }
}

const piscarLampada = () => {
    if(idPiscar == null){
        idPiscar = setInterval(ligarDesligar, 500)
        piscar.textContent = 'Parar'
    }else{
        clearInterval(idPiscar)
        piscar.textContent = 'Piscar'
        idPiscar = null
    }
     
}

const quebrarLampada = () => lampada.src = './img/quebrada.jpg'

const resetarLampada = () => lampada.src = './img/desligada.jpg'

ligar.addEventListener('click' , ligarLampada)
desligar.addEventListener('click' , desligarLampada)
lampada.addEventListener('dblclick', quebrarLampada)
piscar.addEventListener('click', piscarLampada)
resetar.addEventListener('click', resetarLampada)