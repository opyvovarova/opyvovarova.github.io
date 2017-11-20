$(document).ready(function () {
    var p = $('.window_wrap');
    $('.telButton').click(function () {//отображение формы
        p.css({'display':'block'}).hide().fadeIn(1000);
    });
    
    p.click(function (event) {//закрытие формы по клику на обертку
        if (event.target == this) {
            $(this).css({'display':'none'});
        }
    });
    
    $('.window_close').click(function () {//закрытие по крестику
        p.css({'display':'none'});
    });
    
    //появление подсказки
    $('.telButton .telButton_background').hover(
        function () { //курсор навели
            var v = $('.telButton_hover');
            if (!v.hasClass('fHovered')){                                  v.stop().css('display','block').animate({'opacity':1},500).addClass('fHovered');
                }
        },
        
        function () {//курсор убрали
            var v = $('.telButton_hover');
            if (v.hasClass('fHovered')) {
                v.stop().animate({'opacity' : 0},500, function () {
                    $(this).css('display','none');
                }).removeClass('fHovered');
                }
        }
    
    );
    
    $('.telButton.anim').css({'position' : 'absolute', 'top' : '-100px', 'right' : '50px', 'transition' : 'top 0.9s cubic-bezier(0.65, 1.95, 0.3, 0.32) 0.5s'});
    
    telButtonReturn();
    
    $(window).scroll(function() {
        telButtonReturn();
    });
    
    $(window).resize(function() {
        telButtonReturn();
    })
    
    function telButtonReturn() {
        var wHeight, sHeight, result;
        wHeight = getWindowHeight();
        sHeight = getScrollHeight();
        result = wHeight + sHeight - 100;
        $('.telButton.anim').css({'position' : 'absolute', 'top' : result + 'px', 'right' : '50px'});
    }
    
    function getWindowHeight() {
        var windowHeight;
        windowHeight = $(window).height();
        return windowHeight;
    }
    
    function getScrollHeight() {
        var scrollHeight;
        scrollHeight = $(window).scrollTop();
        return scrollHeight;
    }
});