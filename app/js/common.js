$(function () {
    $('.slider-iner').slick({
        arrows: false,
        dots: true
    });
    $('.prod-iner').slick({
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        slidesToShow: 4,
        dots: true
    });


});

function menu() {
    let el = document.querySelector(".js_logo_btn");
    console.log(el);
    el.addEventListener('click', open);

    function open(ev) {

        console.log("open");

        document.body.classList.add("overlay");
        document.body.classList.add("active");
        document.querySelector(".hiden_menu").classList.add("active");
        var close_menu = document.body;
        console.log(close_menu);
        close_menu.addEventListener('click', close);

    }

    function close(ev) {
        console.log("close");
        console.log(ev.target);
        if (ev.target.matches(".close_btn")) {
            console.log("if true");
            document.querySelector(".hiden_menu").classList.remove("active");
            document.body.classList.remove("overlay");
            document.body.classList.remove("active");
        }

    }
}

function tab() {
    var btns = document.querySelector(".prod-togle");
    var col_tabs = document.querySelectorAll(".prod-items");
    var col_btns = document.querySelectorAll('.togle');
    console.log("work");
    btns.addEventListener('click', change);

    function change(ev) {


        if (ev.target.matches(".togle"))
        {
            if (ev.target.matches(".active")) {}
            else {
                for (var i = 0; i <= col_btns.length; i++) {
                    if (col_btns[i].classList.contains("active")) {
                        col_btns[i].classList.remove("active");
                        col_tabs[i].classList.remove("active");
                    }
                    if (col_btns[i] == ev.target) {
                        col_btns[i].classList.add("active");
                        col_tabs[i].classList.add("active");
                    }
                }
            }
        }
        else {}

    }


}

function header_menu() {
    var hm = document.querySelectorAll(".hidden_menu");
    var head = document.querySelector("header");
    for (var i = 0; i <= hm.length; i++) {
        hm[i].style.top = parseInt(head.clientHeight) + "px";
    }

    window.addEventListener("resize", function () {
        for (var i = 0; i <= hm.length; i++) {
            hm[i].style.top = parseInt(head.clientHeight) + "px";
        }
    });


}
function open_li()
{
    console.log("open_li");
    var el = document.querySelector(".hiden_menu_iner");
    console.log(el);
    el.addEventListener('click',open_iner);
    function open_iner(ev) {
        console.log("work");
        if(ev.target.matches(".item"))
        {
            ev=ev.target.nextElementSibling;
            console.log(ev);
            if(ev.matches(".active"))
            {
                ev.classList.remove("active");
            }
            else {
                ev.classList.add("active");
            }

        }




    }

}
function all() {
    menu();
    tab();
    open_li();
    header_menu();

}

document.addEventListener("DOMContentLoaded", all);