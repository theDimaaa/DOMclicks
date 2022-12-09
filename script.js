let cont = document.createElement('div')
let title = document.querySelector('#title')
cont.textContent = 'Текст внутри контейнера'
cont.className = 'container'

let btn = document.createElement('button')
btn.textContent = 'Применить'
btn.addEventListener('click', function(){
    let crsd = document.createElement('div')
    crsd.textContent = 'Блок создан при клике на кнопку'
    document.body.append(crsd)
    crsd.className = 'crsd'
    crsd.addEventListener('click', function(){
        crsd.style.cssText = `
        color: red;
        margin-top: 20px;
        `
    })
})
//  title.toUpperCase is not a function - что делать?
document.body.append(btn)
document.body.append(cont)
