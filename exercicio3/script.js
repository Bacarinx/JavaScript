function contagem () {
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let btn = document.querySelector('#btn')
    let res = document.querySelector('#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`[ERRO] Insira os dados e tente novamente`) 
    } else {
        res.innerHTML = "Contando: "
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)

        if(p == 0) {
            p = 1
        }
        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}