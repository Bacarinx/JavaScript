function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if(fAno.value.length == 0 || fAno.value >= ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade >= 11 && idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else 
        {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade >= 11 && idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}