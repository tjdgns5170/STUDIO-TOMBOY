$(document).ready(function(){
    AOS.init();

    // new Swiper(".mySwiper",{
    //     // slidePerview: 'auto',
    //     // speed: 1500,
    //     loop:true,
    //     // autoplay:{
    //     //     delay: 1500,
    //     //     disableOnInteraction: false,
    //     // }
    // })
    var swiper = new Swiper(".mySwiper", {
        breakpoints :{
            1200:{
                slidePerview: 'auto',
                loop:true,
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }        
      });

      $('.studio').mouseenter(function(){
        $('.menu1').addClass('active');
    });
    $('.menu1').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.men').mouseenter(function(){
        $('.menu2').addClass('active');
    });
    $('.menu2').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.women').mouseenter(function(){
        $('.menu3').addClass('active');
    });
    $('.menu3').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.collect').mouseenter(function(){
        $('.menu4').addClass('active');
    });
    $('.menu4').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.store').mouseenter(function(){
        $('.menu5').addClass('active');
    });
    $('.menu5').mouseleave(function(){
        $(this).removeClass('active');
    });

      $('.btn').click(function(){
        $('.sec-2-imgbox').animate({
            bottom: 600
        },function(){
            $('.sec-2-imgbox').css({
                bottom: 0
            }).find('img').first().appendTo('.sec-2-imgbox');
        });
    });

    function time(){
        auto = setInterval(function(){
        $('.btn').trigger('click');
        },3500);
    }
    time();

    $('.btn').hover(function(){
        clearInterval(auto);
    },function(){
        time();
    });

    $('#hamburger').click(function(){
      $(this).toggleClass('active');
      $('#hamburger span').toggleClass('active');
      $('.icon-box').toggleClass('active');
      $('.main-menu').toggleClass('active');
  });

});