$(document).ready(function(){
    //Banner area Owl carousel
    $('.banners').owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
    //about area Owl Carousel
    $('.about-content').owlCarousel({
        items: 1,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });

    //works area Owl Carousel
    $('.gallery').owlCarousel({
        items: 3,
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin:10,
        responsive:{
          0:{
            items: 1,
          },
          567:{
            items: 2,
          },
          991:{
            items: 3,
          }
       }
    });

    //social contact area owl carousel
    $('.social-contact').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });

    //back to top
   $('.back-to-top').click(function(){
    $('html,body').animate({
      scrollTop : 0,
    },2000);
   });

   //responsive menu 
   $('.logo a i').click(function(){
      $('.menu ul').slideToggle();
      return false;
   });
});

$(window).scroll(function(){
    var scrollvalue = $(this).scrollTop();
  
    $('.back-to-top span').text(scrollvalue);
  
    if (scrollvalue > 500){
      $('.back-to-top').slideDown();
      $('.logo-menu-area').addClass('fiexdHeader');
    }else{
      $('.back-to-top').fadeOut();
      $('.logo-menu-area').removeClass('fiexdHeader');
    }
  });