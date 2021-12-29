function carregar() { 
    var saudacao = document.getElementById('saudacao');
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        // Bom dia
        saudacao.innerHTML = `<strong>Bom dia!</strong>`
        img.src = 'morning.png'
        document.body.style.background = '#DFC4A6'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        saudacao.innerHTML = `<strong>Boa tarde!</strong>`
        img.src = 'evening.png'
        document.body.style.background = '#BF7B72'
    } else {
        //Boa noite
        saudacao.innerHTML = `<strong>Boa noite!</strong>`
        img.src = 'night.png'
        document.body.style.background = '#074C69'
    }
}