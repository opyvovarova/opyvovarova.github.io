// $(document).ready(function () {

//     /*header mobile menu*/
//     var pull = $('#header-menu'),//блок с кнопкой мобильного меню
//         menu = $('.nav-top'),//главное меню
//         button = pull.find('.mob-btn');//кнопка показать/скрыть
//     menuHeight = menu.height();

//     $(pull).on('click', function (e) {//при клике на мобильное меню
//         e.preventDefault();//убираем свойство ссылки по умолчанию
//         if (button.hasClass('show')) {//при наличии у кнопки активного класса
//             button.removeClass('show');//убираем данный класс
//             menu.slideUp('fast');//скрываем меню
//         } else {//при отсутсвии активного класса
//             button.addClass('show');//добовляем его кнопке
//             menu.slideDown('fast');//показываем меню
//         }
//     });
//     $(document).on('click', function (e) {//при клике на поле
//         if ($(e.target).closest('.header__navbar').length != 1) {//не содержащего навигационную панель
//             $('.nav-top').slideUp('fast');//скрываем меню
//             $('.mob-btn').removeClass('show');//убираем у кнопки активный класс
//         }
//     });
//     /*close header mobile menu*/

//     /*animate scroll menu*/
//     $(document).on('click', '.nav-top a', function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
//         event.preventDefault();
//         var href = $(this).attr('href');
//         var target = $(href);
//         var top = target.offset().top;
//         $('html,body').animate({scrollTop: top}, 1000);
//         return false;
//     });
//     /*close animate scroll menu*/

//     /*block animation*/
//     var windowHeight = $(window).height();//переменная для определения высоты окна
//     var elements = $('.how'),//блок элементов
//         item = $('.how__box--item');//скрытый елемент

//     $(window).scroll(function () {//при прокрутке окна
//         if (($(this).scrollTop() + windowHeight) >= elements.offset().top) {//до начала блока с классом how
//             item.each(function (i) {//функция задержки появления каждого элемента
//                 $(this).delay((i++) * 500).fadeTo(1000, 1);
//             });
//         }
//     });
//     /*close block animation*/
    
//     /*yandex map*/
//     var map = new Map();
//     map.init({
//         selector:'#map2',
//         center:'г. Донецк, ул. Артема 75',
//         zoom:12,
//         placemarks: [
//             {
//                 address:'г. Донецк, ул. Артема 75',
//                 options: [
//                     {key:'draggable',value:true}
//                 ],
//                 properties: [
//                     {key:'hintContent',value:'Тыц'},
//                     {key:'balloonContentHeader', value:"Предприятия Донецка"},
//                     {key:'balloonContentBody', value:"<h1>ArtCraft</h1>"}
//                 ]
//             },
//             {
//                 address:'г. Донецк, ул. Артема 100',
//                 options: [
//                     {key:'draggable',value:true}
//                 ],
//                 properties: [
//                     {key:'hintContent',value:'Пока'}
//                 ]
//             }
//         ]
//     });    
//     /*close yandex map*/
    
//     /*top-form validation*/
//     if (document.getElementById('top-form')) {
//         var validation = new Validation();
//         validation.init({
//             ajax: true,
//             ajaxUrl: myajax.url,
//             classItem: "main-form__field",//елемент, который нужно провалидировать
//             eventElement: '#top-form-submit',//событие по клику кнопки 'Отправить'
//             items: [//масив объектов
//                 {
//                     item: 'email', tpl: 'email', tplMsg: 'некорректный e-mail'//объект эл.почта с сообщением о некорректном вводе
//                 },
//                 {
//                     item: 'name', tpl: 'kir+lat', tplMsg: 'только буквы'//объект имя с сообщением о некорректном вводе
//                 },
//                 {
//                     item: 'phone', tpl: 'number', tplMsg: 'только цыфры'//объект имя с сообщением о некорректном вводе
//                 },
//                 {
//                     item: 'obj', tpl: 'kir+lat', tplMsg: 'только буквы'//объект имя с сообщением о некорректном вводе
//                 },
//                 {
//                     item: 'time', tpl: 'kir+lat', tplMsg: 'только буквы'//объект имя с сообщением о некорректном вводе
//                 }
//             ],
//             ajaxSubmitSuccess: function (responseText, err, form) {

//                 var formData = new FormData(form);//объявляем новую FormData
//                 formData.append('action','getmessage');//задаем действие и значение
//                 if (!err) {
//                     $.ajax({
//                         url: myajax.url,
//                         type: "POST",
//                         data: formData,
//                         contentType: false,
//                         processData: false,
//                         success: function (data) {
//                             console.log( data );
//                             if(data.result === 'success'){
//                                 form.reset();
//                             }else{
//                                 alert('Некорректно заполнено!!')
//                             }
//                         }
//                     });
//                     return false;
//                 }
//                 return false;
//             }
//         });
//     }
//     /*top-form validation*/

//     /*scroll block*/
//     var element = $('#sidebar');//елемент, который необходимо сделать фиксированным
//     if (element.length > 0) {//проверка наличия элемента на странице
//         var elementPosition = element.offset().top;//определяем позицию элемента относительно верха документа
//         $(window).scroll(function () {//при прокрутке окна браузера
//             fixedScroll(element, elementPosition, $('#footer'));//вызывается функция с заданными селекторами
//         });
//     }
//     /*close scroll block*/
// });

// function fixedScroll(element, elementPosition, blockElement) {//функция фиксированногоблока, с селекторами элемента, его позиционирования и преграждающего блока
//     var top = $(document).scrollTop(),//значение отступа прокрутки сверху для первого элемента
//         blockingElement = blockElement.offset().top,//позиция блокирующего блока отностительно верха документа
//         height = element.outerHeight();//высота элемента, включающая внутренние и внешние отступы
//     if (top > elementPosition && top < blockingElement - height) {//
//         element.addClass('fixed').removeAttr("style");
//     }
//     else if (top > blockingElement - height) {
//         element.removeClass('fixed').css({'position': 'absolute', 'bottom': '50px', 'right': '0'});
//     }
//     else {
//         element.removeClass('fixed');
//     }
// }