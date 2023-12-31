const perguntasERespostas = document.querySelectorAll('.perguntas-e-respostas')

perguntasERespostas.forEach(function (item) {
    item.addEventListener('click', function () {
       
        const itemMostrar = document.querySelector('.mostrar')
        itemMostrar.classList.remove('mostrar')
        item.classList.add('mostrar')
    })
})