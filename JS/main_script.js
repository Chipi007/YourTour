jQuery(document).ready(function() {

    $(function(){
        $("#phone").mask("+9(999)999-99-99");
    });

    $(window).scroll(function() {     
        if ($(window).scrollTop() > 450) {
            $('.header').addClass('header__scrolled');
            $('.menu__link a').css('color', '#1B1F2B');
            jQuery('.menu__link').hover(
                    function () {
                        jQuery(this).addClass('hover');
                    },
                     function () {
                    jQuery(this).removeClass('hover');
                    });
            $('.phone__number a').css('color', '#1B1F2B');
            jQuery('.phone__number a').hover(
                function () {
                    jQuery(this).addClass('hover');
                },
                 function () {
                jQuery(this).removeClass('hover');
                });
            $('.logo img').css('filter', 'brightness(0) saturate(100%) invert(7%) sepia(4%) saturate(7476%) hue-rotate(188deg) brightness(98%) contrast(88%)');
        } 
        else {
            $('.header').removeClass('header__scrolled');
            jQuery('.menu__link').hover(
                function () {
                    jQuery(this).removeClass('hover');
                });
            $('.menu__link a').css('color', '#FFFFFF');
            $('.phone__number a').css('color', '#FFFFFF');
            jQuery('.phone__number a').hover(
                function () {
                    jQuery(this).removeClass('hover');
                });
            $('.logo img').css('filter', 'invert(.0)');
        }
    });
});