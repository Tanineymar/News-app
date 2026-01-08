

// Handle Hamburger
const menuBtn = document.getElementById('menu-btn')
const categories = document.getElementById('categories')
const navLink = document.querySelectorAll('.nav-link')

menuBtn.addEventListener('click' , ()=>{
    categories.classList.toggle('show')
})

navLink.forEach((link)=>{
    link.addEventListener('click' , ()=>{
        categories.classList.remove('show')
    })
})