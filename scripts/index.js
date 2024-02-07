navlinks = document.querySelector('.navlinks')
hamburgerMenu = document.querySelector('.hamburger-menu')
crossBtn = document.querySelector('.cross-button')


const menuShow = () =>{
    navlinks.classList.add('show')
}

const closeMenu = () =>{
    navlinks.classList.remove('show')
}