$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.nav').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
  
      $('.fa-bars').removeClass('fa-times');
      $('.nav').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 10){
        $('header').addClass('header-active');
      }else{
        $('header').removeClass('header-active');
      }
  
    });
  
    $('.facility').magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{
        enabled:true
      }
    });
  
  });
  window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
  
  }