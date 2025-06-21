document.addEventListener("DOMContentLoaded", function(){
    let story = document.querySelector('.story');
    let storyDrop = document.querySelector('.story .story-menu');
    let news = document.querySelector('.news');
    let newsDrop = document.querySelector('.news .news-menu');

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
})