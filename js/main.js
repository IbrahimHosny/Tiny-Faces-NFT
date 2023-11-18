let width = window.innerWidth;

if(width > 1200) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} else if (width > 992 && width < 1200) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} else {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
// ---------------------------------
var swiper1 = new Swiper(".s1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ##################
// nav
let burgerMenu = document.getElementById('burger-menu');
let menu = document.getElementById('nav-menu');
// let disBlock = '';
let isTrue = false;

// console.log(burgerMenu.children[0].style);
const menuDisplay = () => {
    isTrue = !isTrue;
    menu.style = `display:${isTrue&&'block'}`
console.log(burgerMenu.children[0].style);

    {isTrue ? `${burgerMenu.children[0].classList.add('bar-one')}` : `${burgerMenu.children[0].classList.remove('bar-one')}` }

    {isTrue ? `${burgerMenu.children[1].style.width = '0px'}` : `${burgerMenu.children[1].style.width = '50px'}` }

    {isTrue ? `${burgerMenu.children[2].classList.add('bar-three')}` : `${burgerMenu.children[2].classList.remove('bar-three')}` }

    console.log(isTrue , menu.style.display);
}
let windowWidth = window.innerWidth;

{windowWidth < 768 && burgerMenu.addEventListener('click', menuDisplay)}
{windowWidth < 768 && menu.addEventListener('click', menuDisplay)}
