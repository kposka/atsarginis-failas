const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },
  breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 1,
        spaceBetween: 400,
        slidesPerGroup: 1,
      },
      // when window width is >= 480px
      800: {
        slidesPerView: 2,
        spaceBetween: 100,
        slidesPerGroup: 2,
      },
      // when window width is >= 640px
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 80,

      }
    }
});


const swiperReviews = new Swiper('.swiperReviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 150
      },
      // when window width is >= 480px
      900: {
        slidesPerView: 2,
        slidesPerGroup:2,
        spaceBetween: 80
      },
      // when window width is >= 640px
      1400: {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 100,
      }
    }
});



var navigation = document.getElementById("navigation");
var navbutton = document.getElementById("mobileNavigationButton");
var signup =document.getElementsByClassName("right-side");

navbutton.addEventListener("click",function(){
navbutton.classList.toggle("rotate");
navigation.classList.toggle("mobileNavigationWidth");
navigation.classList.toggle("mobileNavigation");
});

window.onload = function(){
  document.getElementById('btn').click();}

function tabsChange(target, name){
  var tabs = document.getElementsByClassName("tab");
  var tab = document.getElementById(name);
  var button = document.getElementsByClassName("button");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tabs[i].classList.remove("tabStyle");

    window.onload = function(){
    document.getElementById('button').click();}

    // Display tab
    tab.style.display = "block";


    // Add tab style
    setTimeout(function(){
      tab.classList.add("tabStyle");
    }, 500);

}
}
