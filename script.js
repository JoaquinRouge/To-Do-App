let input = document.getElementById('input')
let boton = document.getElementById('btn-add')
let listaTareas = document.getElementById('task-list')
let alerta = document.getElementById('alerta')
let soundDone = new Audio('./assets/audio/erase.wav')
let soundRemove= new Audio('./assets/audio/remove.wav')


boton.addEventListener('click', addTask)

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addTask()
    }
})

function addTask() {
    
    
    if (input.value === '') {
        return(alerta.innerHTML = 'Por favor, debes introducir una tarea.')
    }

    alerta.innerHTML = ''
    let li = document.createElement('li')
    listaTareas.appendChild(li)
    li.textContent = '- ' + input.value
    let btnsContainer = document.createElement('div')
    btnsContainer.classList.add('btnscontainer')
    li.appendChild(btnsContainer)
    let btnRemove = document.createElement('button')
    btnsContainer.appendChild(btnRemove)
    btnRemove.innerHTML = '❌'
    btnRemove.classList.add('btnremove')
    btnRemove.addEventListener('click', function(e){
        if (e.target.className === 'btnremove') {
            li.remove()
            soundRemove.play()
            alerta.innerHTML = ''
        }
    })
    let btnDone = document.createElement('button')
    btnsContainer.appendChild(btnDone)
    btnDone.innerHTML = '✔'
    btnDone.classList.add('btndone')
    btnDone.addEventListener('click', function(e){
        if (e.target.className === 'btndone') {
            li.style.textDecoration = 'line-through'
            soundDone.play()
            alerta.innerHTML = ''
        }
    })
    input.value = ''
}
