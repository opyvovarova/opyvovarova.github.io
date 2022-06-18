//Get the button
const mybutton = document.getElementById("btnScrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Language switch
$(document).on('click', '.language__item', function (event) {
    var flag = document.getElementById("language_flag");
    var lang_text = document.getElementById("language__text");
    if(this.classList.contains("ukr")){        
        flag.src = "./img/icons/language/rus.png";
        lang_text.textContent = "Рус";
        this.classList.remove("ukr");
        this.classList.add("rus");
    }else{
        flag.src = "./img/icons/language/ukr.png";
        lang_text.textContent = "Укр";
        this.classList.remove("rus");
        this.classList.add("ukr");
    }
   
    
})

$(document).ready(function () {

    /*mobile menu*/
    $(document).on('click', '#mobile-menu', function (event) {
        event.preventDefault();
        var menu = $(this).next('.menu');
        $(this).toggleClass('header__trigger--active');
        menu.slideToggle('slow');
        return false;
    });
    /*close*/
    /*header feedback-form*/
    $(document).on('click', '.btn', function (event) {
        event.preventDefault();
        var form = $(this).next('.header__callback-wrap');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            form.slideUp(400);
        } else {
            $(this).addClass('active');
            form.slideDown(400);
        }
        return false;
    });
    $(document).on('click', '.header__callback--close', function (event) {
        event.preventDefault();
        $('.btn').removeClass('active');
        $('.header__callback-wrap').slideUp(400);
        return false;
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.header__callback-wrap').length != 1) {
            $('.btn').removeClass('active');
            $('.header__callback-wrap').slideUp(400);
        }
    });
    /*close*/
    $(document).on('click', '.order__service', function (event) {
        event.preventDefault();
        var form = $(this).next('.price__callback-wrap');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            form.slideUp(400);
        } else {
            $(this).addClass('active');
            form.slideDown(400);
        }
        return false;
    });
    $(document).on('click', '.price__callback--close', function (event) {
        event.preventDefault();
        $('.order__service').removeClass('active');
        $('.price__callback-wrap').slideUp(400);
        return false;
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.price__callback-wrap').length != 1) {
            $('.order__service').removeClass('active');
            $('.price__callback-wrap').slideUp(400);
        }
    });

    /*close*/
    /*---forms---*/
    
    // $('.order__service').click(function() {
    //     var popup_id = $('#' + $(this).attr("rel"));
    //     $(popup_id).show();

    // });
    // $('.header__callback--close').click(function(){
    //     $('.header__callback-wrap').hide();
    //     event.preventDefault();
    //     $('.btn').removeClass('active');
    //     $('.header__callback-wrap').slideUp(400);
    //     return false;
    // });




    /*header form*/
    $('#header-form-name, #header-form-email, #header-form-text').unbind().blur(function () {

        var id = $(this).attr('id');
        var val = $(this).val();

        switch (id) {
            case 'header-form-name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                }
                break;

            case 'header-form-email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                }
                break;

            case 'header-form-text':
                if (val != '' && val.length < 5000) {
                    $(this).removeClass('error').addClass('not_error');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                }
                break;

        } // end switch(...)

    }); // end blur()
    $('#header-form').submit(function (event) {
        event.preventDefault();
        var name = $('#header-form-name').val(),
            mail = $('#header-form-email').val(),
            message = $('#header-form-text').val();
        $.ajax({
            url: myajax.url,
            type: "POST",
            data: {
                action: 'headfeedback',
                name: name,
                mail: mail,
                message: message
            },
            success: function (data) {
                $('#header-form input:text, textarea').val('').removeClass('error, not_error').text('');
                $('.header__msg').removeClass('active');
                $('.header__callback').slideUp(400);
            }
        }); // end ajax({...})
        return false;
    }); // end submit()
    /*close*/

    /*main page feedback*/
    $('#feedback-main-name, #feedback-main-email, #feedback-main-text').unbind().blur(function () {

        var id = $(this).attr('id');
        var val = $(this).val();

        switch (id) {
            case 'feedback-main-name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                }
                break;

            case 'feedback-main-email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                }
                break;

            case 'feedback-main-text':
                if (val != '' && val.length < 5000) {
                    $(this).removeClass('error').addClass('not_error');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                }
                break;

        } // end switch(...)

    }); // end blur()
    $('#feedback-main').submit(function (event) {
        event.preventDefault();
        var name = $('#feedback-main-name').val(),
            mail = $('#feedback-main-email').val(),
            message = $('#feedback-main-text').val();
        $.ajax({
            url: myajax.url,
            type: "POST",
            data: {
                action: 'mainfeedback',
                name: name,
                mail: mail,
                message: message
            },
            success: function (data) {
                $('#feedback-main input:text, textarea').val('').removeClass('error, not_error').text('');
            }
        }); // end ajax({...})
        return false;
    }); // end submit()
    /*close*/

    /*contacts-form*/
    $('#contacts-form-name, #contacts-form-email, #contacts-form-text').unbind().blur(function () {

        var id = $(this).attr('id');
        var val = $(this).val();

        switch (id) {
            case 'contacts-form-name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                }
                break;

            case 'contacts-form-email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                }
                break;

            case 'contacts-form-text':
                if (val != '' && val.length < 5000) {
                    $(this).removeClass('error').addClass('not_error');
                } else {
                    $(this).removeClass('not_error').addClass('error');
                }
                break;

        } // end switch(...)

    }); // end blur()
    $('#contacts-form').submit(function (event) {
        event.preventDefault();
        var name = $('#contacts-form-name').val(),
            mail = $('#contacts-form-email').val(),
            message = $('#contacts-form-text').val();
        $.ajax({
            url: myajax.url,
            type: "POST",
            data: {
                action: 'contacts',
                name: name,
                mail: mail,
                message: message
            },
            success: function (data) {
                $('#contacts-form input:text, textarea').val('').removeClass('error, not_error').text('');
            }
        }); // end ajax({...})
        return false;
    }); // end submit()
    /*close*/
});
