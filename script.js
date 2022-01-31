const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu)

// auto close mobile menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}
  
menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

// show active menu
const highlightMenu = () => {
    const ctrlHigh = document.querySelector('.highlight')
    const homePage = document.querySelector('#home-page')
    const aboutPage = document.querySelector('#about-page')
    const servicesPage = document.querySelector('#services-page')
    const signUpPage = document.querySelector('#signup')
    let scrollPos = window.scrollY

    if (window.innerWidth > 960 && scrollPos < 650) {
        homePage.classList.add('highlight')
        aboutPage.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1450) {
        homePage.classList.remove('highlight')
        aboutPage.classList.add('highlight')
        servicesPage.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2350) {
        aboutPage.classList.remove('highlight')
        servicesPage.classList.add('highlight')
        return
    }

    if ((ctrlHigh && window.innerWidth < 960 && scrollPos < 600) || ctrlHigh) {
        ctrlHigh.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)