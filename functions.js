const trocarTema = () => {
    body = document.body
    bodyStyle = window.getComputedStyle(body)
    bodyColor =  bodyStyle.getPropertyValue('background-color')
    fouter = document.querySelector('footer')
    if (bodyColor == 'rgba(0, 0, 0, 0)' || bodyColor == 'rgb(255, 255, 255)') {
        body.style.backgroundColor = '#0d1117'
        body.style.color = 'white'
        fouter.style.backgroundColor = '#0d1117'
        fouter.style.color = 'white'

    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        fouter.style.backgroundColor = 'white'
        fouter.style.color = 'black'
    }
}
const pesquisar = () => {
    const string = document.getElementById('Search').value.toLowerCase()
    const conteudos = document.querySelectorAll('/index.html#conteudo')
    const result = document.getElementById('resultado')
    const btn_back = document.getElementById('back')
    result.hidden = false
    btn_back.hidden = false

    for (let i = 0; i < conteudos.length; i++) {
        const conteudo = conteudos[i].textContent.toLowerCase()
        if (conteudo.includes(string)) {
            conteudos[i].style.display = 'block'
        } else {
            conteudos[i].style.display = 'none'
        }
    }
}
const voltar = () => {
    const conteudos = document.querySelectorAll('#conteudo')
    const btn_back = document.getElementById('back')
    const result = document.getElementById('resultado')
    result.hidden = true
    btn_back.hidden = true
    for (let i = 0; i < conteudos.length; i++) {
        const conteudo = conteudos[i].textContent.toLowerCase()
        conteudos[i].style.display = 'block'
    }
}
