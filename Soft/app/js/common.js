$(function() {



    /*получаем высоту окна браузера*/
    function getWindowHeight(){
        var windowHeight;
        windowHeight = $(window).height();
        return windowHeight;
    };

    /*****Header Fixed  ******/
    $(window).scroll(function () {

        if($(window).scrollTop() >= 110){
            $('.mnu-line').addClass('scrolled');
        }
        else{
            $('.mnu-line').removeClass('scrolled');
        }
    });


    /*****Sandwitch menu*****/

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });
    /***Popup****/
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

})