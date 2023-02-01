let num = document.querySelector('#num')
let res = document.querySelector('#res')
let select = document.querySelector('#select')
let valores = []

function isNumero(num) {
    if(Number(num) >= 1 && Number(num <= 100)) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //adicioanndo o valor no vetor

        const opt = document.createElement('option')
        opt.innerHTML = `valor ${Number(num.value)} inserido` 
        select.appendChild(opt)

    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }

    num.value = '' //limpando o input quando apertar o botão
    num.focus() //focus permite que a gente escreva denovo no mesmo lugar
}

function finalizar() {
    if(valores.length != 0) {
        let total = valores.length
        let valorMax = valores.reduce(function(prev, acc) {
            return prev > acc ? prev : acc
        })
        let valorMin = valores.reduce(function(prev, acc) {
            return prev < acc? prev : acc
        })
        let soma = valores.reduce(function(prev, acc) {
            return prev += acc
        })
        let media =  soma / valores.length
        let mediareduzida = media.toFixed(2)

        res.innerHTML = ''
        res.innerHTML += `<p>O total de numeros cadastrados é de: ${total}</p>`
        res.innerHTML += `<p>O valor máximo na lista de números é: ${valorMax}</p>`
        res.innerHTML += `<p>O valor mínimo na lista de números é: ${valorMin}</p>`
        res.innerHTML += `<p>O valor da soma dos números inseridos é de: ${soma}</p>`
        res.innerHTML += `<p>O valor médio dos valores inseridos é de: ${mediareduzida}`
    } else {
        window.alert('insira um numero antes de finalizar')
    }
}
