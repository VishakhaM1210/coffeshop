const navlinks= document.querySelectorAll(".nav-menu .nav-link");
const menuopenbutton = document.querySelector("#menu-open-button");
const menuclosebutton =document.querySelector("#menu-close-button");

menuopenbutton.addEventListener("click",() => {
    document.body.classList.toggle("show-mobile-menu");
});

menuclosebutton.addEventListener("click",() => menuopenbutton.click());

navlinks.forEach(link =>{
  link.addEventListener("click",() => menuopenbutton.click());

});
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
  grabCursor:true,
  spacebetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPerView: 1
    },
    768:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    }
  }


  
});
