const navbar = document.querySelector('[data-nav]');
const cartItem = document.querySelector('[data-cart]');
const navButton = document.querySelector('[data-nav-button]');
const cartBtn = document.querySelector('[data-cart-button]');
const searchBtn = document.querySelector('[data-search-btn]');
const searchBox = document.querySelector('[data-search]');

navButton.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');
})

cartBtn.addEventListener('click', ()=>{
    navbar.classList.remove('active');
    cartItem.classList.toggle('active');
    searchBox.classList.remove('active');
})

searchBtn.addEventListener('click', ()=>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchBox.classList.toggle('active');
})

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');
}