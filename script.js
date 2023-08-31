const logo = document.getElementById('logo')
const btnMenu = document.getElementById('menu')
const btnClose = document.getElementById('close')
const navMobil = document.querySelector('nav ul')
function openMenu() {
    navMobil.classList.add('menu')
    btnMenu.style.display = 'none'
    logo.style.display = 'none'
}

function closeMenu() {
    navMobil.classList.remove('menu')
    btnMenu.style.display = 'block'
    logo.style.display = 'block'
}