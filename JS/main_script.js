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
    let screenHeight = innerHeight;
    let scrollTop = window.scrollY;
    if(scrollTop >= screenHeight){
        for(const item of headerLinks){
            item.classList.add('black');
            item.classList.remove('white');
        }
        headerWrapper.classList.add('header__scrolled');
        logo.classList.add('filtered__logo');
        headerPhone.classList.add('black');
        headerPhone.classList.remove('white');
    }
    else{
        for(const item of headerLinks){
            item.classList.remove('black');
            item.classList.add('white');
        }
        headerWrapper.classList.remove('header__scrolled');
        logo.classList.remove('filtered__logo');
        headerPhone.classList.add('white');
        headerPhone.classList.remove('black');
    }
};

changeHeader();
