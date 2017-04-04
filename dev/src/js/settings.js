// settings.js
/* ==========================================================
>> FUCTIONS
========================================================== */

  // =========================== */
  // SMOOTH SCROLL
  // =========================== */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var header = $('header').outerHeight();
        $('html,body').animate({
          scrollTop: target.offset().top - header
        }, 1000, 'easeInOutCubic');
        return false;
      }
    }
    });
  });
  
  // =========================== */
  // SCROLL WATCHER
  // =========================== */
  function ScrollWatcher(){
    var scroll = $(window).scrollTop();
    if(scroll > 1){
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  }


  // =========================== */
  // FULL HEIGHT
  // =========================== */
  function fullHeight(){
    var wh = $(window).height();
    $('.fullHeight').css('height', wh);
  }
// FUNCTIONS end
/* ==========================================================
>> DOCUMENT READY
========================================================== */
$(document).ready(function(){
  // =========================== */
  // FULL HEIGHT Start
  // =========================== */
  fullHeight();


  // =========================== */
  // WOW Start
  // =========================== */
  wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       false,       
    live:         true        
  });
  wow.init();
  


  // =========================== */
  // Custom Scroll Bar Start
  // =========================== */
  $(".add-scrollbar").mCustomScrollbar({
    theme:"light"
  });
  

  // =========================== */
  // Light Gallery Start
  // =========================== */
  $(".add-lightgallery").lightGallery({
      thumbnail:true,
      fullScreen:true
  });


// BASIC BANNER
// ---------------------------------------------------------------------------------------------------  */
    //BANNER IMAGE HEIGHT 
    var $window = $(window);

    function bannerHeight(){
    var wh = $( window ).height();
    $('.basic-banner-wrapper').css({'height':wh - 100 +'px'});
    $('.basic-banner-wrapper .item img').css({'height':wh - 100 +'px'});
    }

    bannerHeight();
    $window.resize(bannerHeight);

    if($("#basic-banner ul li").length > 1) {
    $('#basic-banner').superslides({
        play:9000,
        animation : 'fade' ,
        pagination:true,
        inherit_height_from: '.basic-banner-wrapper',
        inherit_width_from:'.basic-banner-wrapper'
    });
    }
    else{
          $('#basic-banner').superslides({
        play:9000,
        animation : 'fade' ,
        pagination:true,
        inherit_height_from: '.basic-banner-wrapper',
        inherit_width_from:'.basic-banner-wrapper'
    });
      $('#basic-banner').superslides('stop');
      $( ".slides-navigation" ).hide();
      //$('.basic-banner-wrapper').addClass( "one-image" );
    }

    //ADDS A CLASS SO THE NAV TO MAKE THE ARROWS
    $( ".owl-next" ).addClass( "arrow next" );
    $( ".owl-prev" ).addClass( "arrow prev" );
    
// BASIC BANNER END
// ---------------------------------------------------------------------------------------------------  */





                            


// BASIC CAROUSEL WITH TEXT HOVER
// ---------------------------------------------------------------------------------------------------  */
    $(".basic-carousel-with-icon-hover-car").lightGallery({
        thumbnail:true,
        fullScreen:true
    }); 
$('.basic-carousel-with-icon-hover-car').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    navigation:true,
    margin:5, 
    responsive:{
    0:{
        items:1,

        nav:false
    },
    600:{
        items:2,
        nav:true
    },
    1000:{
        items:4,
        nav:true
    }
    }
});

     //ADDS A CLASS SO THE NAV TO MAKE THE ARROWS
    $( ".owl-next" ).addClass( "arrow next" );
    $( ".owl-prev" ).addClass( "arrow prev" );   

// BASIC CAROUSEL WITH TEXT HOVER END
// ---------------------------------------------------------------------------------------------------  */



// BOX UNDER CAROUSEL
// ---------------------------------------------------------------------------------------------------  */
$('#box-under-carousel').owlCarousel({
loop:true,
nav:false,
dots:true,
responsive:{
    0:{
        items:1,
        margin:25,
        stagePadding:24,
        nav:true
    },
    600:{
        items:2,
        margin:25,
        stagePadding:24,
        nav:true
    },
    1000:{
        items:3,
        margin:20,
        nav:false
    }
}
});

//ADDS A CLASS SO THE NAV TO MAKE THE ARROWS
$( ".owl-next" ).addClass( "arrow next" );
$( ".owl-prev" ).addClass( "arrow prev" );

// BOX UNDER CAROUSEL END
// ---------------------------------------------------------------------------------------------------  */

   

// REVIEWS CAROUSEL
// ---------------------------------------------------------------------------------------------------  */
$('#car-reviews').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1
});

//ADDS A CLASS SO THE NAV TO MAKE THE ARROWS
$( ".owl-next" ).addClass( "arrow next" );
$( ".owl-prev" ).addClass( "arrow prev" );

// REVIEWS CAROUSEL
// ---------------------------------------------------------------------------------------------------  */


  


// CAR INSET BORDER 
// ---------------------------------------------------------------------------------------------------  */

$('#carousel-with-inset-border').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    navigation:true, 
    responsive:{
    0:{
        items:1,
        margin:0,
        nav:false,
        dots:true
    },
    767:{
        items:1,
        margin:5,
        nav:false,
        dots:true
    },
    1000:{
        items:3,
        margin:5,
        nav:false
    }
    }
});
$('.carousel-with-inset-border figure').imagefill();
// CAR INSET BORDER V3
// ---------------------------------------------------------------------------------------------------  */




// CAROUSEL WITH DESCRIPTION AND BUTTON
// ---------------------------------------------------------------------------------------------------  */
$('#car-description-and-button').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    navigation:true, 
    responsive:{
    0:{
        items:1,
        nav:false
    },
    767:{
        items:2,
        nav:true
    },
    1025:{
        items:3,
        margin:20,
        nav:true
    }
    }
});




//ADDS A CLASS SO THE NAV TO MAKE THE ARROWS
$( ".owl-next" ).addClass( "arrow next" );
$( ".owl-prev" ).addClass( "arrow prev" );

// CAROUSEL WITH BUTTON END
// ---------------------------------------------------------------------------------------------------  */




// CAROUSEL HIDDEN CONTENT
// ---------------------------------------------------------------------------------------------------  */

$('#car-hidden-content').owlCarousel({
  loop:true,
  navigation:true, 
  responsive:{
    0:{
      items:1,
      margin:0,
      nav:false,
    },
    767:{
      items:2,
      margin:20,
      nav:false,
    },
    1024:{
      items:3,
      margin:20,
      nav:false,
    }
  }
});
$('.car-hidden-content figure').imagefill();

// CAROUSEL HIDDEN CONTENT
// ---------------------------------------------------------------------------------------------------  */





// CAR CENTERED BOX FULLWIDTH
//-----------------------------------------------------------------------------------------------  */

$('#car-centered-box-full-width').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    navigation:true, 
    responsive:{
    0:{
        items:1,
        margin:0,
        nav:false,
        dots:true
    },
    767:{
        items:1,
        margin:50,
        nav:false,
        dots:true
    },
    1000:{
        items:1,
        margin:50,
        nav:true,
        dots:true
    }
    }
});

//ADDS A CLASS SO THE NAV TO MAKE THE ARROWS
$( ".owl-next" ).addClass( "arrow next" );
$( ".owl-prev" ).addClass( "arrow prev" );

$('.car-centered-box-full-width figure').imagefill();
// CAR INSET BORDER V3
// ---------------------------------------------------------------------------------------------------  */







// FULLSCREEN GALLERY
// ---------------------------------------------------------------------------------------------------  */
$("#lightgallery").lightGallery({
    thumbnail:true,
    fullScreen:true
});

// FULLSCREEN GALLERY END
// ---------------------------------------------------------------------------------------------------  */

                            

  


// WELCOME CONTENT
// ---------------------------------------------------------------------------------------------------  */

//http://jedfoster.com/Readmore.js/
// Collapse all content on mobile
if ($(window).width() > 768) {
$('.welcome-content').readmore({
  speed: 500,
  collapsedHeight: 140,
  moreLink: '<a class="rd-more-btn" href="#">Read more<i class="fa fa-plus"></i></a>',
  lessLink: '<a class="rd-more-btn" href="#">Read less<i class="fa fa-minus"></i></a>'
});
}
else {
$('.welcome-content').readmore({
  speed: 500,
  collapsedHeight: 65,
  moreLink: '<a class="rd-more-btn" href="#">Read more<i class="fa fa-plus"></i></a>',
  lessLink: '<a class="rd-more-btn" href="#">Read less<i class="fa fa-minus"></i></a>'
});
}
// WELCOME CONTENT END
// ---------------------------------------------------------------------------------------------------  */






 // HAMBURGER AND CENTERED LOGO
// ---------------------------------------------------------------------------------------------------  */

//MOBILE MENU
$('.hamburger-and-centered-logo #toggle').click(function() {
  $('.hamburger-and-centered-logo #overlay').addClass('open');

});

//MENU WHEN SEARCHBOX IS OPEN
$('.hamburger-and-centered-logo #bk-overlay #toggle').click(function() {
      $('.hamburger-and-centered-logo #bk-overlay').removeClass('open');
    setTimeout(function(){
      $('.hamburger-and-centered-logo #overlay').addClass('open');
    }, 200);

});

//CLOSES MENU
$('.hamburger-and-centered-logo .button_container-closer').click(function() {
  $('.hamburger-and-centered-logo #overlay').removeClass('open');
});

//OPEN AND CLOSED SEARCHBOX
$('.hamburger-and-centered-logo .pop-book-now-btn').click(function() {
  if ( $('.hamburger-and-centered-logo .pop-book-now-holder').hasClass( "scrolled-se" ) ) {
    $('.hamburger-and-centered-logo .pop-book-now-holder').removeClass('scrolled-se');
  }else{
   $('.hamburger-and-centered-logo .pop-book-now-holder').addClass('scrolled-se');
  }  
});

//BOOK BUTTON IN MENU OVERLAY
$('.js-open-search').click(function() {
  if ( $('.hamburger-and-centered-logo #overlay').hasClass( "open" ) ) {
    $('.hamburger-and-centered-logo #overlay').removeClass('open');
    setTimeout(function(){
      $('.hamburger-and-centered-logo #bk-overlay').addClass('open');
    }, 200);
  }else{
    $('.hamburger-and-centered-logo #bk-overlay').addClass('open');
  }  
});

/*$(".hamburger-and-centered-logo .overlay-menu").mCustomScrollbar();*/

//CLOSES SEARCHBOX OVERLAY
$('.hamburger-and-centered-logo .bk-overlay .button_container-closer').click(function() {
  $('.hamburger-and-centered-logo #bk-overlay').removeClass('open');
});

    //MENU HEIGHT 
    var $window = $(window);

    function menuHeight(){
    var wh = $( window ).height();
    $('.overlay-menu').css({'height':wh - 140 +'px'});
    }

    menuHeight();
    $window.resize(menuHeight);

$(".overlay-menu").mCustomScrollbar({
  theme:"dark"
});






// HAMBURGER AND CENTERED LOGO END
// ---------------------------------------------------------------------------------------------------  */




    

// LOGO LEFT WITH LANGUAGES
// ---------------------------------------------------------------------------------------------------  */
//MOBILE MENU
$('.logo-left-with-languages #toggle').click(function() {
  $('.logo-left-with-languages #overlay').addClass('open');
});

//CLOSES MENU
$('.logo-left-with-languages .button_container-closer').click(function() {
  $('.logo-left-with-languages #overlay').removeClass('open');
});

//OPEN AND CLOSED SEARCHBOX
$('.logo-left-with-languages .pop-book-now-btn').click(function() {
  if ( $('.logo-left-with-languages .pop-book-now-holder').hasClass( "scrolled-se" ) ) {
    $('.logo-left-with-languages .pop-book-now-holder').removeClass('scrolled-se');
  }else{
   $('.logo-left-with-languages .pop-book-now-holder').addClass('scrolled-se');
  }  
});

//BOOK BUTTON IN MENU OVERLAY
$('.js-open-search').click(function() {
  if ( $('.logo-left-with-languages #overlay').hasClass( "open" ) ) {
    $('.logo-left-with-languages #overlay').removeClass('open');
    setTimeout(function(){
      $('.logo-left-with-languages #bk-overlay').addClass('open');
    }, 200);
  }else{
    $('.logo-left-with-languages #bk-overlay').addClass('open');
  }  
});

/*$(".logo-left-with-languages .overlay-menu").mCustomScrollbar();*/

//CLOSES SEARCHBOX OVERLAY
$('.logo-left-with-languages .bk-overlay .button_container-closer').click(function() {
  $('.logo-left-with-languages #bk-overlay').removeClass('open');
});

// LOGO LEFT WITH LANGUAGES END
// ---------------------------------------------------------------------------------------------------  */


// LOGO LEFT WITH LANGUAGES
// ---------------------------------------------------------------------------------------------------  */
if ( $('body').hasClass( "se-box-closed-page" ) ){
$('.pop-book-now-holder').addClass('scrolled-se');
}
//OUTSIDE DOCUMENT READY
function setScroll(){
  var scroll = $(window).scrollTop();
if ( $('body').hasClass( "se-box-closed-page" ) ){
  if(scroll > 1){
    $('.logo-left-with-languages .main-nav').addClass('scrolled');
  } else {
    $('.logo-left-with-languages .main-nav').removeClass('scrolled');
  }  
}else{
  if(scroll > 1){
    $('.logo-left-with-languages .main-nav').addClass('scrolled');
    $('.logo-left-with-languages .pop-book-now-holder').addClass('scrolled-se');
  } else {
    $('.logo-left-with-languages .main-nav').removeClass('scrolled');
    $('.logo-left-with-languages .pop-book-now-holder').removeClass('scrolled-se');
  }
}
}



$(window).scroll(function(){
  setScroll();
});
// LOGO LEFT WITH LANGUAGES END
// ---------------------------------------------------------------------------------------------------  */

                                                    
  


// FOOTER NAV STYLE 4
// ---------------------------------------------------------------------------------------------------  */
$( ".style-4 .foot-button" ).click(function() {
  $( ".style-4 .footer-navigation" ).slideToggle( "slow", function() {
// Animation complete.
});
  $(".style-4 .foot-btn-inner").toggleClass('open');
  $(".style-4 .footer-icons").toggleClass('open-ft');
});
if ($(window).width() > 767) {                                                  
  $(".footer-icons .phone-no a").addClass('tooltip-na');
  $(".footer-icons .phone-no a").attr("href", "");
  $(".footer-icons .phone-no a").click(function() {
    event.preventDefault();
  });
}                  

$('.tooltip-na').tooltipster({
  theme: 'tooltipster-shadow'
}); 
// FOOTER NAV STYLE 4 END
// ---------------------------------------------------------------------------------------------------  */

                                                                                
                            


// SUBNAV CAROUSEL
// ---------------------------------------------------------------------------------------------------  */
  if($(".subnav ul li").length === 0) {
    $(".sub-nav-carousel").hide();
  }

  if(($(".subnav ul li").length > 4) || ($(window).width() < 1024))  {

    $('.subnav ul').owlCarousel({
      loop:true,
      nav:true,
      dots:false,
      navigation:true, 
      responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        767 : {
            items:3
        },
        // breakpoint from 768 up
        992 : {
            items:4
        }
      }
    });

  }else{

    $(".sub-nav-carousel").addClass('no-carousel');

  }

  //ADDS A CLASS SO THE NAV TO MAKE THE ARROWS
  $( ".owl-next" ).addClass( "arrow next" );
  $( ".owl-prev" ).addClass( "arrow prev" );

// SUBNAV CAROUSEL END
// ---------------------------------------------------------------------------------------------------  */





  // SUB NAV MOBILE COLLAPSE BUTTON
// ---------------------------------------------------------------------------------------------------  */
      $( ".sub-nav-mob-collapse .snav-button" ).click(function() {
           $( ".sub-nav-mob-collapse .snav-nav ul" ).slideToggle( "slow", function() {
              // Animation complete.
            });
         $(".sub-nav-mob-collapse .btn-inner").toggleClass('open');
      });
  // SUB NAV MOBILE COLLAPSE BUTTON
// ---------------------------------------------------------------------------------------------------  */



                            


// MAP HEIGHT
// ---------------------------------------------------------------------------------------------------  */
    //BANNER IMAGE HEIGHT 
    var $window = $(window);

    function mapHeight(){
    var mh = $( window ).height();
    $('.map-area').css({'height':mh - 100 +'px'});
    }

    mapHeight();
    $window.resize(mapHeight);
// MAP HEIGHT END
// ---------------------------------------------------------------------------------------------------  */


                            

                            

                            


                            

                                                                               

                            
                            
}); // DOCUMENT READY end

/* ==========================================================
>> WINDOW LOAD
========================================================== */
$(window).load(function(){
  $('body').addClass('loaded');
}); // WINDOW LOAD end

/* ==========================================================
>> WINDOWS SCROLL
========================================================== */
$(window).scroll(function(){
	ScrollWatcher();
}); // WINDOWS SCROLL end

/* ==========================================================
>> WINDOW RESIZE
========================================================== */
$(window).resize(function(){
  fullHeight();
}); // WINDOW RESIZE end
