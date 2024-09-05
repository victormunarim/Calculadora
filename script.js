let num = ''
let tela = document.querySelector('h1')

let itemDentro = (item) => {
    if(num.length < 11){
        num += item
        tela.textContent += item
    }
}

function decimal(){
    itemDentro('.')
}

function adiciona1(){
    itemDentro('1') 
}

function adiciona2(){
    itemDentro('2')
}

function adiciona3(){
    itemDentro('3')
}

function adiciona4(){
    itemDentro('4')
}

function adiciona5(){
    itemDentro('5')
}

function adiciona6(){
    itemDentro('6')
}

function adiciona7(){
    itemDentro('7')
}

function adiciona8(){
    itemDentro('8')
}

function adiciona9(){
    itemDentro('9')
}

function adiciona0(){
    itemDentro('0')
}

function soma(){
    itemDentro('+')
}

function subtracao(){
    itemDentro('-')
}

function calcular(){
    tela.textContent = eval(num)
}


function resetar(){
    tela.textContent = ''
    num = ''
}