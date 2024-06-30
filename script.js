let primeiroNum = ''
let segundoNum = ''
let operacao
let modoDecimal = false
let primeiroDec = ''
let segundoDec = ''
let tela = document.querySelector('h1')
let numerosDecimais = [1,10,100,1000,10000,100000,1000000]
let historico = document.querySelector('h2')

function decimal(){
    tela.textContent += '.'
    modoDecimal = true
}

let numeroDentro = (numero) => {
    if(modoDecimal == false){
        if(operacao){
            segundoNum += numero
        }else{
            primeiroNum += numero
        }
    }else{
        if(operacao){
            segundoDec += numero
        }else{  
            primeiroDec += numero
        }
    }
}

function adiciona1(){
    numeroDentro('1')
    tela.textContent += 1
}

function adiciona2(){
    numeroDentro('2')
    tela.textContent += 2
}

function adiciona3(){
    numeroDentro('3')
    tela.textContent += 3
}

function adiciona4(){
    numeroDentro('4')
    tela.textContent += 4
}

function adiciona5(){
    numeroDentro('5')
    tela.textContent += 5
}

function adiciona6(){
    numeroDentro('6')
    tela.textContent += 6
}

function adiciona7(){
    numeroDentro('7')
    tela.textContent += 7
}

function adiciona8(){
    numeroDentro('8')
    tela.textContent += 8
}

function adiciona9(){
    numeroDentro('9')
    tela.textContent += 9
}

function adiciona0(){
    numeroDentro('0')
    tela.textContent += 0
}

function soma(){
    tela.textContent += '+'
    operacao = 'soma'
    modoDecimal = false
}

function subtracao(){
    tela.textContent += '-'
    operacao = 'subtracao'
}

function calcular(){
    let quantidadeDecimal
    if(primeiroDec.length >= segundoDec.length){
        quantidadeDecimal = primeiroDec.length
    }else{quantidadeDecimal = segundoDec.length}
    let valor
    let primeiroNumeroCompleto = Number(primeiroNum) + Number(primeiroDec)/numerosDecimais[primeiroDec.length]
    let segundoNumeroCompleto = Number(segundoNum) + Number(segundoDec)/numerosDecimais[segundoDec.length]
    let valorFinal
    switch(operacao){
        case 'soma': 
        valor = primeiroNumeroCompleto + segundoNumeroCompleto
        if(valor.toFixed(quantidadeDecimal).toString().slice(-1) == 0 && Number.isInteger(valor) == false){
            valorFinal = valor.toFixed(quantidadeDecimal-1)
        }else{valorFinal = valor.toFixed(quantidadeDecimal)}
        tela.textContent = valorFinal
        break
        case 'subtracao':
        valor = primeiroNumeroCompleto - segundoNumeroCompleto
        tela.textContent = valor.toFixed(quantidadeDecimal)
        break
    }
    console.log(segundoDec);
    botarNoHistorico()
}


function resetar(){
    primeiroNum = ''
    segundoNum = ''
    primeiroDec = ''
    segundoDec = ''
    operacao = ''
    tela.textContent = ''
    modoDecimal = false
}

function mouseHistorico(){
    let divHistorico = document.querySelector('.div-historico')
    divHistorico.classList.toggle('mostrar')
}

function botarNoHistorico(){
    historico.innerHTML += tela.innerHTML
}