function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) { //fano = formulário ano
    // //Se o usuário não digitou nada OU digitou um ano maior do que o ano atual, então a condição é verdadeira
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) { // Homem
    gênero = 'Homem'
    if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'meninocrianca.png')
    } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'homemvinteanos.png')
    } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'homemquarentaanos.png')
    } else{
        //idoso
        img.setAttribute('src', 'homemoitentaanos.png')
    }
} else if (fsex[1].checked) { // Mulher
    gênero = 'Mulher'
    if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'meninacrianca.png')
    } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'mulhervinteanos.png')
    } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'mulherquarentaanos.png')
    } else {
        //idoso
        img.setAttribute('src', 'mulheroitentaanos.png')
    }

}

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}

}
