$(document).ready(function(){
    // 윈도우에 load ,resize 이벤트 설정
    $(window).on('load resize',function(){
        // 윈도우의 가로길이를 bodyW변수에 저장
        var bodyW=$(this).width(); //W:대문자
        // 만약 윈도우릐 가로길이가 1220보다 작으면(테블릿 모바일 버전)세로 이코디언 메뉴

        if(bodyW<=1199){
            $('.acc_item').removeClass('active');
            $('.sitemap .site_logo img').attr('src','img/logo_black.png');
            $('.site_close a img').attr('src','img/close_gray.png');

              //sitemap의 세로 아코디언 메뉴
            $('.sitemap .site_nav>ul>li>a').click(function(){
                if($(this).attr('class')!='active'){
                    $('.site_nav .sub').slideUp();
                    $('.site_nav>ul>li>a').removeClass('active');
                    $(this).next().slideDown();
                    $(this).addClass('active');
                }else{
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                }
            });



            //윈도우의 가로깋이가 1200보다 크거나 같으면(pc버전) 

        }else{
            //주메뉴에 마우스 오버 이벤트 설정
            $('header nav').hover(function(){
                // 서브멘 내려옴
                $('header nav .sub').stop().slideDown(300);
                // 서브메뉴 배경 내려옴
                $('.sub_bg').stop().slideDown(300);
                // header_wrap에 active설정
                $('.header_wrap').addClass('active');
            },function(){
                // 서브멘 올라감
                $('header nav .sub').stop().slideUp(300);
                // 서브메뉴 배경 올라감
                $('.sub_bg').stop().slideUp(300);
                // header_wrap에 active제거
                $('.header_wrap').removeClass('active');
                //아코디언 갤러리(accordion gallery, section.s5)
                $('.acc_item').click(function(){
                    $('.acc_item').removeClass('active');
                    $(this).addClass('active');
                });
                $('.sitemap .site_logo img').attr('src','img/logo.png');
                $('.site_close a img').attr('src','img/close.png');
            });
        }
    });//load resize 이벤트

    // 화면이 스크롤되어서 첫번째 section이 자나가면 header에 active 설정
    $(window).scroll(function(){
        // 윈도우의 scrolltOP값을 TOP변수에 저장
        var top=$(this).scrollTop();
        // 만약 top변수의 값이 0보다 작으면 header에 ACTIVE설정
        if(top>0){
            $('header').addClass('active');
        // top변수의 값이 0보다 작거니 깉으면 header에서 acive 제거
        }else{
            $('header').removeClass('active');
        }
        // 각 section안의 객체들 애니메이션
        // 각 section안의 영역의 위쪽 위치값을 구해서 각 변수에 저장
        var sTop1=$('section.s2').offset().top-600;
        var sTop2=$('section.s3').offset().top-600;
        var sTop3=$('section.s4').offset().top-600;
        var sTop4=$('section.s5').offset().top-600;
        var sTop5=$('section.s6').offset().top-600;
        var sTop6=$('section.s7').offset().top-600;
        // 만약 각section의 위쪽 위치값이 windowd의 scro;;Top값보다 작으면
        // &&('그리고'라는 뜻의 논리 연산자, 조건 2개 모두true일 때 실행)
        if(sTop1 < top && top < sTop2){
            $('.company_txt').addClass('active');
            $('.company_img').addClass('active');
        }
        if(sTop2 < top && top < sTop3){
            $('.s3 .fade_animation').addClass('active');
            $('.s3 .up_animation').addClass('active');
        }
        if(sTop3 < top && top < sTop4){
            $('.s4 .fade_animation').addClass('active');
            $('.s4 .s4_ani1').addClass('active');
            $('.s4 .s4_ani2').addClass('active');
            $('.s4 .s4_ani3').addClass('active');
            $('.s4 .s4_ani4').addClass('active');
        }
        if(sTop4 < top && top < sTop5){
            $('.s5 .up_animation').addClass('active');
        }
        if(sTop5 < top && top < sTop6){
            $('.s6 .up_animation').addClass('active');
        }
        if(sTop6 < top){
            $('.s7 .up_animation').addClass('active');
        }
    });


    // header에 마우스 오버했을 때 header에 active설정
    $('header').hover(function(){
        $('.header_wrap').addClass('active');
    },function(){
        $('.header_wrap').removeClass('active');
    });

    // main swiper slide
    var swiper = new Swiper(".mySwiper", {
        effect:'fade',
        loop:true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: "section.s1 .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "section.s1 .swiper-button-next",
          prevEl: "section.s1 .swiper-button-prev",
        },
      });
    // swiper에 play.stop버튼 추가
    $('section.s1 .swiper-pagination').append('<span class="swiper-play-stop"></span>');
    // swiper-play-stop버튼을 클릭할 때마다 배경 이미지도 변경학 멈췄다가 다시 자동 재생되는 기능
    var sw=0;
    $('.swiper-play-stop').click(function(){
    if(sw==0){
        sw=1;
        swiper.autoplay.stop();
        $(this).css('background-image','url(img/play.png)')
    }else{
        sw=0;
        swiper.autoplay.start();
        $(this).css('background-image','url(img/pause.png)')
    }
    });
    // 상품 슬라이드(product swiper slide)
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop:true,
        pagination: {
            el: "section.s3 .swiper-pagination",
        },
        breakpoints: {   
           1200:{
             slidesPerView: 4,   //가로길이 1280픽셀 이상
            },
           767:{
              slidesPerView:2.1,   //가로길이767~1199픽셀 사이
            //   pagination: {
            //     el: "section.s3 .swiper-pagination",
            //   }
            
            },
          360:{
             slidesPerView: 1.5,   //가로길이 480~767px픽셀 이상
            }
        }
      });
   
    //.family 클릭 이벤트 설정
    var on=0;
    $('.family .fa_btn').click(function(){
        if(on==0){
            on=1;
            $('.family').addClass('active');
        }else{
            on=0;
            $('.family').removeClass('active');
        }
        return false;
    });

    // top버튼
    $('.top').click(function(){
        $('html,body').animate({'scrollTop':0});
    });

    // 메뉴 버튼 클릭하면 사이트맵나타남
    $('.menu').click(function(){
        $('.sitemap').addClass('active');
        return false;
    });
    // 닫기 버튼 클릭하면 사이트맵 사라짐
    $('.site_close').click(function(){
        $('.sitemap').removeClass('active');
        return false;
    });
});//dovument