function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
   var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //MANHÃ NO CAMPO
        img.src = 'campo02fim.png'
        document.body.style.backgroundColor = '#d8bd94'
    } else if (hora >= 12 && hora <18) {
        //TARDE NA ESTRADA
        img.src = 'estrada02fim.png'
        document.body.style.backgroundColor = '#f4821d'
    } else {
        //NOITE DO DODGE NA CIDADE
        img.src = 'noite02fim.png'
        document.body.style.backgroundColor = '#032140'
    }
}
