function calcular() {
    const num = document.querySelector('#num')
    const res = document.querySelector('#res')
    const tabuada = document.querySelector('#tabu')
    if(num.value.length == 0) {
        window.alert('Coloque um número')
    } else {
        tabuada.innerHTML = ''
        for(let i = 1; i <=10; i++) {
            
            const calculo = Number(num.value) * i
            const opt = document.createElement('option')
            opt.innerHTML = `${Number(num.value)} x ${i} = ${calculo}`
            
            tabuada.appendChild(opt)
        }
    }
}