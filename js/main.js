const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header__list-icon');
const leftMenu = document.querySelector('.left__menu');
const rightMenu = document.querySelector('.right__menu');
const closeL = document.querySelector('.closel');
const closeR = document.querySelector('.closer');
const videoBtn = document.querySelector('.video');
const videoContent = document.querySelector('.video__content');



burger.addEventListener('click',function(event){
    leftMenu.classList.add("activel");
});
list.addEventListener('click',function(event){
    rightMenu.classList.add("activer");
});

closeL.addEventListener('click', function(event){
    leftMenu.classList.remove("activel");
    rightMenu.classList.remove("activer");
});

closeR.addEventListener('click', function(event){
    leftMenu.classList.remove("activel");
    rightMenu.classList.remove("activer");
});

videoBtn.addEventListener('click', function(){
    videoContent.classList.toggle('active__video');
});



