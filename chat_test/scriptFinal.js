if(!window.jQuery){
document.write('<scr' + 'ipt type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></scr' + 'ipt>');
}
$(document).ready(function ( ) {

    var imageO;
    /*форма*/

    var html = "<div class=\"window_wrap\" style=\"display: none; position: fixed; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,.5); z-index: 90;\" >"

        + "<div class=\"chatbox\" style=\"position: absolute; right: 100px; bottom: 70px; width: 500px; min-width: 390px; height: 600px; background: #fff; padding: 25px; margin: 20px auto; box-shadow: 0 3px #ccc;\">"

        + "<div class=\"chatlogs\" style=\"padding: 10px; width: 100%; height: 450px; background: #eee; overflow-x: hidden; overflow-y: scroll;\">"

            + "<div class=\"chat operator\" style=\"display: flex; flex-flow: row wrap; align-items: flex-start; margin-bottom: 40px;\">"
                + "<div class=\"user-operator-photo\" style=\"width: 60px; height: 60px; background: #ccc; border-radius: 50%; overflow: hidden;\">"
                    + "<img id=\"uPhoto\" style=\"width: 100%;\" src=\"\">"
                + "</div>"
                + "<p class=\"operator-name\" id=\"opera1\" style=\"width: 40%; text-transform:uppercase;  border-radius: 10px; color: black; font-size:             14px; font-weight: bold; letter-spacing: 1px; padding-left: 25px; padding-top: 10px; \">Operator name</p><br>"
                + "<p class=\"operator-title\" style=\"width: 30%; text-align: center;  border-radius: 10px; color: black; font-size:12px; letter-spacing: 1px; padding-top: 20%; padding-right: 15%;\"></p>"
                + "<p class=\"chat-operator-message\" style=\"width: 100%; padding: 15px; margin: 5px 10px 0; border-radius: 10px; color: #fff; font-size: 20px; background: #1adda4;\">What's up, Brother!!!!</p>"
            + "</div>"

            + "<div class=\"chat customer\" style=\"display: flex; flex-flow: row wrap; align-items: flex-start; margin-bottom: 40px;\">"
                + "<div class=\"user-photo\" style=\"width: 60px; height: 60px; background: #ccc;   border-radius: 50%; overflow: hidden; margin-bottom: 20px;\">"
                    + "<img id=\"cPhoto\" style=\"width: 100%; \" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLL8kJ5GVaDt6LWJY98-7qd6--jvyCQ_YgJKsxKPBZ6f8fOHV\">"
                + "</div>"
                + "<p class=\"customer-name\" style=\"width: 40%; text-align: center;  border-radius: 10px; color: black; font-size:             14px; paddign-left: -15px font-weight: bold; text-transform:uppercase; letter-spacing: 1px; font-weight: bold;\">Olga Pyvovarova</p>"
                + "<p class=\"customer-title\" style=\"width: 30%; text-align: center; margin-left: -170px; margin-top: 30px; border-radius: 10px; color: black; font-size:             12px;  text-transform:uppercase; letter-spacing: 1px;\">Developer</p>"
                + "<p class=\"chat-message\" style=\"width: 100%; padding: 15px; margin: 5px 10px 0; border-radius: 10px; color: #fff; font-size: 20px; background: #1ddced;\">What's up, Brother!!!!</p>"
            + "</div>"
        + "</div>"

        + "<div class=\"chat-form\" style=\"margin-top: 20px; display: flex; align-items: flex-start;\">"
            + "<textarea id=\"texForm\" style=\"background: #fbfbfb; width: 75%; height: 50px; border: 2px solid #eee; border-radius: 3px; resize: none; padding: 10px; font-size: 18px; color: #333;\"></textarea>"
            + "<button id=\"butForm\" style=\"background: #1ddced; padding: 5px 15px; font-size: 30px; color: #fff; border: none; margin: 0 10px; border-radius: 3px; box-shadow: 0 3px 0 #0eb2c1; cursor: pointer;\">Send</button>"
        + "</div>"



    + "</div>"

+ "</div>";

    $("body").html(html);

    /*конец формы*/

    /*кнопка включения формы*/
    divMesBut = document.createElement('div');
    divMesButBorder = document.createElement('div');
    divMesButBackground = document.createElement('div');
    divMesButHover = document.createElement('div');
    newSpan = document.createElement('span');

    divMesBut.className = "mesButton anim";
    divMesBut.style.borderColor = 'red';
    divMesBut.style.backgroundColor = 'aqua';
    divMesBut.style.zIndex = '90';
    divMesBut.style.width = '60px';
    divMesBut.style.height = '60px';
    divMesBut.style.opacity = '0.7';
    divMesBut.style.backgroundPosition = 'center';
    divMesBut.style.backgroundSize = '100%';
    divMesBut.style.borderRadius = '50%';
    divMesBut.style.position = 'absolute';
    document.body.appendChild(divMesBut);

    divMesButBorder.className = 'mesButton mesButton_border';
    divMesButBorder.style.borderColor = 'red';
    divMesButBorder.style.position = 'absolute';
    divMesButBorder.style.width = '56px';
    divMesButBorder.style.height = '56px';
    divMesButBorder.style.borderRadius = '50%';
    divMesButBorder.style.borderStyle = 'solid';
    divMesButBorder.style.borderWidth = '3px';
    divMesButBorder.style.left = '-1px';
    divMesButBorder.style.top = '-1px';
    divMesBut.appendChild(divMesButBorder);

    divMesButBackground.className = 'mesButton mesButton_background';
    divMesButBackground.style.backgroundColor = 'aqua';
    divMesButBackground.style.backgroundPosition = 'center';
    divMesButBackground.style.backgroundSize = '100%';
    divMesButBackground.style.zIndex = '90';
    divMesButBackground.style.width = '60px';
    divMesButBackground.style.height = '60px';
    divMesButBackground.style.borderRadius = '50%';
    divMesButBackground.style.position = 'absolute';
    /*divMesButBackground.innerHTML = 'X';*/
    divMesButBackground.style.backgroundImage = 'url(http://s1.iconbird.com/ico/0912/MetroUIDock/w512h5121347464978Mail.png)';

    divMesButBackground.appendChild(newSpan);
    divMesBut.appendChild(divMesButBackground);

    divMesButHover.className = 'mesButton_hover';
    divMesButHover.style.width = '150px';
    divMesButHover.style.border = '3px soled #088789';
    divMesButHover.style.backgroundColor = 'aqua';
    divMesButHover.style.borderRadius = '15px';
    divMesButHover.style.padding = '10px';
    divMesButHover.style.marginLeft = '-120px';
    divMesButHover.style.marginTop = '9px';
    divMesButHover.style.fontSize = '0.9em';
    divMesButHover.style.color = '#000';
    divMesButHover.style.opacity = '0';
    divMesButHover.style.zIndex = '90';
    divMesButHover.style.display = 'none';
    divMesButHover.style.lineHeight = '1.2';
    divMesButHover.style.fontFamily = 'Arial';
    divMesButHover.innerHTML = 'message';
    divMesBut.appendChild(divMesButHover);
    /*конец кнопка включения формы*/

    /*подсвечиваем кнопку*/
    $('.mesButton .mesButton_background').hover(function(){
        $(this).css({'opacity':'1'}).css({'background-color':'#fe9126'}).css({'cursor':'pointer'});}, function() {$(this).css({'opacity':'0.7'}).css({'background-color':'aqua'});}
    );

    /*отслеживаем нажатие на кнопку и выводим форму*/
    $('.mesButton').click(function () {
        var v = $('.window_wrap');
            if(v.css('display') == 'none'){
            $('.mesButton .mesButton_background').css({'backgroundImage':'url(data:image/png;base64,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)'});
            $('.window_wrap').css({'display':'block'}).hide().fadeIn(100);
        }
    });

    /*закрытие кнопки и закрываем кнопку*/
    $('.mesButton').click(function () {
        var v = $('.window_wrap');
        if(v.css('display') == 'block'){
            $('.mesButton .mesButton_background').css({'backgroundImage':'url(http://s1.iconbird.com/ico/0912/MetroUIDock/w512h5121347464978Mail.png)'});
            $('.window_wrap').css({'display':'none'});
        }

    });

    /*при нажатии за пределами формы окно закрывается*/
    $('.window_wrap').click(function(event){
        if(event.target == this) {
            $(this).css({'display':'none'});
            $('.mesButton .mesButton_background').css({'backgroundImage':'url(http://s1.iconbird.com/ico/0912/MetroUIDock/w512h5121347464978Mail.png)'});
        }
    });

    /*получаем высоту окна браузера*/
    function getWindowHeight(){
        var windowHeight;
        windowHeight = $(window).height();
        return windowHeight;
    };

    mesButtonReturn();

    /*функция возвращения кнопки сообщения*/
    function mesButtonReturn() {
        var wHeight = getWindowHeight(); /*высота окна браузера*/
        var sHeight = $(window).scrollTop();/*высота скрола в окне*/
        var result = wHeight + sHeight - 100;
        $('.mesButton.anim').css({'position':'absolute','top': result + 'px','right':'100px'});
    };

    /*функция скролинга при прокрутку скрола кнопка делает анимацию*/
    $(window).scroll(function(){
        mesButtonReturn();
    });

    /*при изменении окна происходит анимация кнопки*/
    $(window).resize(function(){
        mesButtonReturn();
    });


    /*подсказка*/
    $('.mesButton .mesButton_background').hover(

        function () {

            var v = $('.mesButton_hover');
            if (!v.hasClass('fHovered')) {
                v.stop().css('display','block').animate({'opacity':1},300).addClass('fHovered');
            }
        },

        function () {
            var v = $('.mesButton_hover');
            if (v.hasClass('fHovered')) {
                v.stop().animate({'opacity':0},300,function() {
                    $(this).css('display','none');

                }).removeClass('fHovered');
            }
        }
    );

    /*анимация кнопки увеличение уменьшение*/

    $('.mesButton .mesButton_background').animate({'width':'+=6px','height':'+=6','top':'-3px','left':'-3px'},1000);
    $('.mesButton .mesButton_background').animate({'width':'-=6px','height':'-=6','top':'0','left':'0'},1000);

    /*Парсим сайт JSON*/
    $('.mesButton').click(function(){
        $.getJSON('https://dev.nexusmedia-ua.com/devtest/', function(data){
            console.log(data);

         for (var i in data.messages) {

            $("#uPhoto").attr("src", data.messages[i].image);
            $(".operator-name").html(data.messages[i].name);
            $(".operator-title").html(data.messages[i].title);
            $(".chat-operator-message").html(data.messages[i].message);
           };

         });


     });




    /*отправка сообщиния пользователем*/

$(function(){
  $("#butForm").click(function(){

    var message = $("#texForm").val();
        $("#texForm").val("");

    var prevMes = $(".customer .chat-message").html();

    $(".customer .chat-message").html(prevMes + "<br>" + message);


  });
 });

});
