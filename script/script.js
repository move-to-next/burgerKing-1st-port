// JQuery Slick-Slider
$(function(){
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > 110){
            $('header').css('position', 'fixed');
        }
        else{
            $('header').css('position', 'relative');
        }
    })
    // Banner aside Slick-Slider
    const syncBarSlider = function(){
        let sideBars = document.querySelectorAll('.banner-sidebar-list');
        let slickDots = document.querySelectorAll('.slick-dots > li');

        sideBars.forEach(sidebar => {
            sidebar.classList.remove('active');
        })
        slickDots.forEach((dot, index)=>{
            if(dot.classList.contains('slick-active')){
                console.log(index);
                sideBars[index].classList.add('active');
                $('.banner-sidebar-wrap').slick('slickGoTo', index);
            }
        })
    };
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
        arrows:false
    })
    $('.banner-aside-wrap').on('afterChange', syncBarSlider);
    clickBarSlider();
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

    $('.slick-dots').after('<div class="progress-bar"><div class="progress-fill"></div></div>');
    $('.banner-aside-wrap').on('afterChange', function(event, slick, currentSlide){
        let progress = ((currentSlide+1)/slick.slideCount)*100;
        $('.progress-fill').css('width', progress+'%');
    });

    // What's new Slick-Slider
    $('.content-menu').slick({
        slidesToShow: 3,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:500,
        infinite:true,
        dots:false,
        arrows:false
    })


})

// Javascript
document.addEventListener("DOMContentLoaded", function(){
    let story = document.querySelector('.story');
    let storyDrop = document.querySelector('.story .story-menu');
    let news = document.querySelector('.news');
    let newsDrop = document.querySelector('.news .news-menu');
    let sideFindStore = document.querySelector('.store-about>.find-store');
    let serviceFindStore = document.querySelector('.other-service>.find-store');
    let modalStoreFind = document.querySelector('.modal-find-store-overlay');
    let modalStoreMore = document.querySelector('.modal-store-more-overlay');
    let storeCard = document.querySelector('.modal-find-store .store-card');
    let modalFindClose = document.querySelector('.modal-find-store-overlay .modal-close-btn');
    let modalMoreClose = document.querySelector('.modal-store-more-overlay .modal-close-btn');

    // GNB Menu Mouseover Event
    story.addEventListener('mouseover', function(){
        storyDrop.classList.add('active');
    });
    story.addEventListener('mouseout', function(){
        storyDrop.classList.remove('active');
    });
    news.addEventListener('mouseover', function(){
        newsDrop.classList.add('active');
    });
    news.addEventListener('mouseout', function(){
        newsDrop.classList.remove('active');
    });

    // FindStore Click Event
    sideFindStore.addEventListener("click", function(){
        modalStoreFind.classList.add('active');
    })
    serviceFindStore.addEventListener("click", function(){
        modalStoreFind.classList.add('active');
    })

    storeCard.addEventListener("click", function(){
        modalStoreMore.classList.add('active');
    })

    modalFindClose.addEventListener("click",function(){
        modalStoreFind.classList.remove('active');
    })
    modalMoreClose.addEventListener("click",function(){
        modalStoreMore.classList.remove('active');
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
                console.log(index);
                sideBars[index].classList.add('slick-active');
            }
        })
        }
    setTimeout(syncBarSlider, 1000);
    // 슬릭슬라이더가 스크립트 초기화보다 먼저 실행 되었기 때문에
    // slickDots 요소 자체가 존재 X // setTimeout으로 1초뒤에
    // 즉, 스크립트 초기화먼저 실행되고 슬릭슬라이더 실행.
    
});