// JQuery Slick-Slider
$(function(){
    // Banner aside Slick-Slider
    $('.banner-aside-wrap').slick({
        slidesToShow:1,
        slidesToScroll:1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:500,
        Infinite:true,
        dots:true,
        arrows:false
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

    filmThums.forEach((filmThum, index)=>{
        filmThum.addEventListener('click',function(){
            mainThums.forEach(mainThum => {
                mainThum.classList.remove('active');
            })
            mainThums[index].classList.add('active');

            let mainVideo = mainThums[index].querySelector('.video-thum');
            let mainYoutube = mainThums[index].querySelector('.video-youtube');
            mainVideo.classList.remove('active');
            mainYoutube.classList.remove('active');

            if(mainThums[index].classList.contains('active')){
                mainVideo.classList.add('active')
            }
            mainVideo.addEventListener("click",function(){
                mainVideo.classList.remove('active');
                mainYoutube.classList.add('active');
            })
        })
    })
})