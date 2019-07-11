$(function(){
    $('.slider-iner').slick({
        arrows:false,
        dots:true});
    $('.prod-iner').slick({
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        slidesToShow:4,
        dots:true});

});