jQuery(document).ready(function() {
    $(function(){
        $("#phone").mask("+7(999)999-99-99");
    });
});

document.addEventListener('scroll', () => {
    changeHeader();
});

let changeHeader = () => {
    let headerWrapper = document.querySelector('.header');
    let headerLinks = document.querySelectorAll('.menu__link');
    let logo = document.querySelector('.img');
    let headerPhone = document.querySelector('.phone__number');
    let screenHeight = innerHeight - 110;
    let scrollTop = window.scrollY;
    if(scrollTop >= screenHeight){
        headerWrapper.classList.add('header__scrolled');
        for(let i = 0; i < headerLinks.length; i++){
            headerLinks[i].classList.add('black');
            headerLinks[i].classList.remove('white');
        }
        logo.classList.add('filtered__logo');
        headerPhone.classList.add('black');
        headerPhone.classList.remove('white');
    }
    else{
        headerWrapper.classList.remove('header__scrolled');
        for(let i = 0; i < headerLinks.length; i++){
            headerLinks[i].classList.remove('black');
            headerLinks[i].classList.add('white');
        }
        logo.classList.remove('filtered__logo');
        headerPhone.classList.add('white');
        headerPhone.classList.remove('black');
    }
};

changeHeader();
