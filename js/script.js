const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
btn.addEventListener('click',navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex') //flex yoktu ilk ekledik
    menu.classList.toggle('hidden')
}