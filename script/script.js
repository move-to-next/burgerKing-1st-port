// JQuery Slick-Slider
$(function(){
    // Scroll-Header Fixed
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > 110){
            $('header').css('position', 'fixed');
        }
        else{
            $('header').css('position', 'relative');
        }
    })
    // Slide-Banner Slick-Slider
    const syncBarSlider = function(){
        let sideBars = document.querySelectorAll('.banner-sidebar-list');
        let slickDots = document.querySelectorAll('.slick-dots > li');

        sideBars.forEach(sidebar => {
            sidebar.classList.remove('active');
        })
        slickDots.forEach((dot, index)=>{
            if(dot.classList.contains('slick-active')){
                sideBars[index].classList.add('active');
                $('.banner-sidebar-wrap').slick('slickGoTo', index);
                // slide-dot이 active상태일때 sidebar도 active상태로 변경.
            }
        })
    };
    $('.banner-sidebar-wrap').slick({
        vertical: true,
        slidesToShow: 10,
        slidesToScroll: 10,
        infinite: false,
        arrows: false,
        dots: false,
        autoplay: false,
        verticalSwiping: true,
        speed: 500
    })

    const clickBarSlider = function(){
        let sideBars = document.querySelectorAll('.banner-sidebar-list');

        sideBars.forEach((sidebar, index) => {
            sidebar.addEventListener('click',function(){
                $('.banner-aside-wrap').slick('slickGoTo', index);
            })
        })
    };
    $('.banner-aside-wrap').slick({
        slidesToShow:1,
        slidesToScroll:1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:500,
        infinite:true,
        dots:true,
        arrows:false,
        adaptiveHeight: true
    })
    $('.banner-aside-wrap').on('afterChange', syncBarSlider);
    // Mobile Responsive Slide-Banner Size
    $(window).resize(function(){
        if($(window).innerWidth() > 370){
            $('.gnb-btn-respon').click(function(){
                $('nav.gnb').toggleClass('active');
            })
            $('.gnb-respon-top .close-btn').click(function(){
                $('nav.gnb').removeClass('active');
            })
        }
        else if($(window).innerWidth() < 370){
            $('.gnb-btn-respon').click(function(){
                console.log('변경안됨');
            })
        }
    }).resize();
    clickBarSlider();
    
    // Slide-Banner Timebar
    $('.slick-dots').after('<div class="progress-bar"><div class="progress-fill"></div></div>');
    const timeAnimation = function(){
        $('.progress-fill').css('width','0%').animate({width: '100%'},3000);
    };
    $('.banner-aside-wrap').on('afterChange', function(){
        timeAnimation();
    });
    $('.banner-aside-wrap').on('beforeChange', function(){
        $('.progress-fill').css('width','0%');
    });
    timeAnimation();

    // Gototop Button Action
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();

        if(scrollTop > 200){
            $('.gototop').addClass('active');
        }
        else{
            $('.gototop').removeClass('active');
        }
    })
    $('.gototop').click(function(){
        $('html, body').animate({scrollTop: 0}, 500);
    })

    // What's new Slick-Slider
    $('.content-menu').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        infinite: true,
        dots: false,
        arrows: false
    })
    // Info Burgerking
    $('.content-slide-wrap-respon').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:500,
        infinite:true
    })

    // Mobile GNB Menu Responsive
    $('.story').click(function(){
        $(this).children('.dropdown').stop().slideToggle(200);
        $('.story').toggleClass('active');
        if($('li.story').hasClass('active')){
        $('.story>div>.bi').css('rotate','180deg');
        }
        else{
            $('.story>div>.bi').css('rotate','0deg');
        }
    })
    $('.news').click(function(){
        $(this).children('.dropdown').stop().slideToggle(200);
        $('.news').toggleClass('active');
        if($('li.story').hasClass('active')){
        $('.story>div>.bi').css('rotate','180deg');
        }
        else{
            $('.story>div>.bi').css('rotate','0deg');
        }
    })
})

// Javascript
document.addEventListener("DOMContentLoaded", function(){
    let story = document.querySelector('.story');
    let storyDrop = document.querySelector('.story .story-menu');
    let news = document.querySelector('.news');
    let newsDrop = document.querySelector('.news .news-menu');
    let sideFindStore = document.querySelector('.store-about>.find-store');
    let resFindStore = document.querySelector('.respon-action-bar .find-store');
    let serviceFindStore = document.querySelector('.other-service>.find-store');
    let modalStoreFind = document.querySelector('.modal-find-store-overlay');
    let modalStoreMore = document.querySelector('.modal-store-more-overlay');
    let storeCard = document.querySelectorAll('.modal-find-store .store-card');
    let modalFindClose = document.querySelector('.modal-find-store-overlay .modal-close-btn');
    let modalMoreClose = document.querySelector('.modal-store-more-overlay .modal-close-btn');
    let modalStoreMoreRes = document.querySelector('.modal-store-more-overlay-respon');
    let modalMoreCloseRes = document.querySelector('.store-more-close-btn');

    // GNB Menu Mouseover Event
    let storyAddActive = function(){
        storyDrop.classList.add('active');
    }
    let storyRemoveActive = function(){
        storyDrop.classList.remove('active');
    }
    let newsAddActive = function(){
        newsDrop.classList.add('active');
    }
    let newsRemoveActive = function(){
        newsDrop.classList.remove('active');
    }
    let storyActive = function(){
        storyDrop.classList.toggle('active');
    }
    let newsActive = function(){
        newsDrop.classList.toggle('active');
    }
    if(window.innerWidth > 1024){
        story.addEventListener('mouseover', storyAddActive);
        story.addEventListener('mouseout', storyRemoveActive);
        news.addEventListener('mouseover', newsAddActive);
        news.addEventListener('mouseout', newsRemoveActive);
    }
    else{
        story.addEventListener('click', storyActive);
        news.addEventListener('click', newsActive);
    }


    // FindStore Click Event
    let openStoreFind = function(){
        modalStoreFind.classList.add('active');
    }
    let closeStoreFind = function(){
        modalStoreFind.classList.remove('active');
    }
    let openStoreMore = function(){
        modalStoreMore.classList.add('active');
    }
    let closeStoreMore = function(){
        modalStoreMore.classList.remove('active');
    }
    let openStoreMoreRes = function(){
        modalStoreMoreRes.classList.add('active');
    }
    let closeStoreMoreRes = function(){
        modalStoreMoreRes.classList.remove('active');
    }

    sideFindStore.addEventListener("click", openStoreFind);
    serviceFindStore.addEventListener("click", openStoreFind);
    resFindStore.addEventListener("click", openStoreFind);
    modalFindClose.addEventListener("click", closeStoreFind);
    modalMoreClose.addEventListener("click",closeStoreMore);

    storeCard.forEach(function(el){
        if(window.innerWidth < 1024){
        el.addEventListener("click", openStoreMoreRes);
        modalMoreCloseRes.addEventListener("click",closeStoreMoreRes);
    }
    else{
        el.addEventListener("click", openStoreMore);
    }
    })

    let filmThums = document.querySelectorAll('.film-thum');
    let mainThums = document.querySelectorAll('.content-film-main-thum');
    mainThums.forEach((mainThum, index) => {
        let mainVideo = mainThums[index].querySelector('.video-thum');
        let mainYoutube = mainThums[index].querySelector('.video-youtube');

        mainVideo.addEventListener("click",function(){
            if(mainVideo.classList.contains('active')){
                mainVideo.classList.remove('active');
                mainYoutube.classList.add('active');
            };
        })
        filmThums.forEach((filmThum, index)=>{
            filmThum.addEventListener('click',function(){
                mainThums.forEach(mainThum => {
                    mainThum.classList.remove('active');
                })
                mainThums[index].classList.add('active');

                mainVideo.classList.remove('active');
                mainYoutube.classList.remove('active');

                if(mainThums[index].classList.contains('active')){
                    mainVideo.classList.add('active')
                }
            })
        })

    })

    let infoCard = document.querySelectorAll('.content-card-item');
    infoCard.forEach((card, index)=> {
        card.addEventListener('mouseover',function(){
            infoCard.forEach(el=>{
                el.classList.remove('active');
            });
            infoCard[index].classList.add('active');
        });
    });

    let btns = document.querySelectorAll('.mockup-btn>button');
    let reviews = document.querySelectorAll('.mockup-review>div');
    btns.forEach((btn, index)=>{
        btn.addEventListener("click", function(){
            reviews.forEach(review=>{
                btn.classList.remove('active');
                review.classList.remove('active');
            })
            reviews[index].classList.add('active');
            btns[index].classList.add('active');
        })
    })

    function syncBarSlider(){
        let sideBars = document.querySelectorAll('.banner-sidebar-list');
        let slickDots = document.querySelectorAll('.slick-dots > li');

        sideBars.forEach(sidebar => {
            sidebar.classList.remove('slick-active');
        })
        slickDots.forEach((dot, index)=>{
            if(dot.classList.contains('slick-active')){
                sideBars[index].classList.add('slick-active');
            }
        })
        }
    setTimeout(syncBarSlider, 500);
    // 슬릭슬라이더가 스크립트 초기화보다 먼저 실행 되었기 때문에
    // slickDots 요소 자체가 존재 X // setTimeout으로 1초뒤에
    // 즉, 스크립트 초기화먼저 실행되고 슬릭슬라이더 실행.
    
});