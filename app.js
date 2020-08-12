window.addEventListener("scroll",function(){
    var header= document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
});

$(document).ready(function(){
    $('.post-wrapper').slick({
  

 
  
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('next'),
    prevArrow: $('prev'),
  });
});