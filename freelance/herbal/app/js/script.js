$(document).ready(function() {
  /*/*header mobile menu*/
  function MenuOpen() {
    $(".header__bottom-menu").css("width", "100%");
    $(".header__bottom-menu__content").append($(".navigation__list"));
  }
  function MenuClose() {
    $(".header__bottom-menu").css("width", "0%");
  }

  $("#mobile-menu").on("click", MenuOpen);

  $("#CloseMenuBtn").on("click", MenuClose);

  $(window).on("scroll touchmove", function() {
    $(".header__bottom").toggleClass("fixed", $(document).scrollTop() > 250);

    $(".header__trigger").toggleClass(
      "block__none",
      $(document).scrollTop() > 250
    );
    $(".header__search").toggleClass(
      "left__block",
      $(document).scrollTop() > 250
    );
  });

  /*close*/
  function MenuOpenSidebar() {
    $(".content__popup").css("width", "100%");
    $(".content__popup-1").append($(".sidebar-categories-wrap"));
  }
  function MenuCloseSidebar() {
    $(".content__popup").css("width", "0%");
  }

  $(".search__parametes").on("click", MenuOpenSidebar);

  $("#CloseMenuBtnSidebar").on("click", MenuCloseSidebar);
  /***Dropdonw folder in favourite*****/
  $(function() {
    var list = $(".js-dropdown-list");
    var link = $(".js-link");
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find("li").click(function() {
      var text = $(this).html();
      var icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text + icon);
      list.slideToggle(200);
      if (text === "* Reset") {
        link.html("Select one option" + icon);
      }
    });
  });

  /*** Product Slider* */

  // Slider | Product
  $(".one-product__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".one-product__slider_navigation",
    arrows: false,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    fade: true,
    cssEase: "linear"
  });
  // Slider | one-product-slider
  $(".one-product__slider_navigation").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    asNavFor: ".one-product__slider",
    focusOnSelect: true,
    centerMode: false,
    vertical: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(document).ready(function() {
    $(".fancybox").fancybox({
      afterShow: function() {
        $(".fancybox-image").elevateZoom({
          //zoomType: "inner",
          cursor: "crosshair",
          zoomType: "lens",
          scrollZoom: true
        });
      },
      beforeClose: function() {
        $(".zoomContainer").remove();
        $(".zoomWindowContainer").remove();
        $(".zoomLens").remove();
      }
    });
  });

  /****Quantity     field */
  $(".input-group").append(
    '<div class="inc button">+</div><div class="dec button">-</div>'
  );
  $(".button").on("click", function() {
    var $button = $(this);
    var oldValue = $button
      .parent()
      .find("input")
      .val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button
      .parent()
      .find("input")
      .val(newVal);
  });

  // /*new tabs js*/
  jQuery(document).ready(function($) {
    $(".our__product-box").hide();
    $(".our__product-box:first").show();
    $(".our__product-tabs li:first").addClass("active");

    $(".our__product-tabs li").click(function(event) {
      $(".our__product-tabs li").removeClass("active");
      $(this).addClass("active");
      $(".our__product-box").hide();

      var selectTab = $(this)
        .find("a")
        .attr("href");
      $(selectTab).fadeIn();
    });
  });

  /***Tabs and mobile dropdown****/

  jQuery(".js-tabs").easytabs({
    animate: true,
    tabActiveClass: "-active",
    panelActiveClass: "-active",
    panelContext: $(".panels-container"),
    defaultTab: "li:first-child",
    tabs: "ul.tabs-list > li"
  });

  jQuery(".tabs-list > li").on("click", function() {
    if (jQuery(this).hasClass("-active")) {
      jQuery(this)
        .parent()
        .toggleClass("-is-open");
    }
  });

  /** Custom select* */
  $(".custom-select").each(function() {
    var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template +=
      '<span class="custom-select-trigger">' +
      $(this).attr("placeholder") +
      "</span>";
    template += '<div class="custom-options">';
    $(this)
      .find("option")
      .each(function() {
        template +=
          '<span class="custom-option ' +
          $(this).attr("class") +
          '" data-value="' +
          $(this).attr("value") +
          '">' +
          $(this).html() +
          "</span>";
      });
    template += "</div></div>";

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(
    function() {
      $(this)
        .parents(".custom-options")
        .addClass("option-hover");
    },
    function() {
      $(this)
        .parents(".custom-options")
        .removeClass("option-hover");
    }
  );
  $(".custom-select-trigger").on("click", function() {
    $("html").one("click", function() {
      $(".custom-select").removeClass("opened");
    });
    $(this)
      .parents(".custom-select")
      .toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this)
      .parents(".custom-select-wrapper")
      .find("select")
      .val($(this).data("value"));
    $(this)
      .parents(".custom-options")
      .find(".custom-option")
      .removeClass("selection");
    $(this).addClass("selection");
    $(this)
      .parents(".custom-select")
      .removeClass("opened");
    $(this)
      .parents(".custom-select")
      .find(".custom-select-trigger")
      .text($(this).text());
  });
  /*close*/

  $(".order-descr").click(function() {
    $(this).toggleClass("styling-border");
    $(this)
      .children(".order__content")
      .toggle();
  });

  /***Select tabs mobile* */

  /*close header mobile menu*/

  /*animate scroll menu*/
  // $(document).on('click', '.nav-top a', function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
  //     event.preventDefault();
  //     var href = $(this).attr('href');
  //     var target = $(href);
  //     var top = target.offset().top;
  //     $('html,body').animate({scrollTop: top}, 1000);
  //     return false;
  // });
  /*close animate scroll menu*/

  // /*block animation*/
  // var windowHeight = $(window).height();//переменная для определения высоты окна
  // var elements = $('.how'),//блок элементов
  //     item = $('.how__box--item');//скрытый елемент

  // $(window).scroll(function () {//при прокрутке окна
  //     if (($(this).scrollTop() + windowHeight) >= elements.offset().top) {//до начала блока с классом how
  //         item.each(function (i) {//функция задержки появления каждого элемента
  //             $(this).delay((i++) * 500).fadeTo(1000, 1);
  //         });
  //     }
  // });
  /*close block animation*/

  /*top-slider*/
  $(".top-slider__wrapper").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: true,
    zIndex: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          dots: false
        }
      }
    ]
  });

  /*close*/

  //our works slider for mobile
  // function worksSlider() {
  //   if ($(window).width() >= 1200) {
  //       $('.recipe-slider__wrapper-slide').slick({
  //           dots: true,
  //           infinite: true,
  //           arrows: true,
  //           speed: 300,
  //           zIndex: 1,
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //       });
  //   }

  // };

  //     /*offer mobile slider and works slider*/
  //     $(window).on('load resize', function () {
  //       worksSlider();
  //   });
  /*close*/
  /*slider dry*/
  function slideReseipt() {
    $(".recipe-slider__wrapper-slide").slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      arrows: true,
      zIndex: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
    });
  }

  slideReseipt();
  function windowSize() {
    if (document.documentElement.clientWidth < 1100) {
      $(".recipe-slider__wrapper-slide").slick("unslick");
    } else {
      slideReseipt();
    }
  }

  $(window).on("load resize", windowSize);
  /***close */

  /**Infinite scroll button* */
  var $container = $(".container").infiniteScroll({
    // options...
    // disable loading on scroll
    loadOnScroll: false
  });

  var $viewMoreButton = $(".again-link");
  $viewMoreButton.on("click", function() {
    // load next page
    $container.infiniteScroll("loadNextPage");
    // enable loading on scroll
    $container.infiniteScroll("option", {
      loadOnScroll: true
    });
    // hide button
    $viewMoreButton.hide();
  });
  /***Sidebar Accordion*** */
  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find(".sidebar__navigation-link");
      // Evento
      links.on(
        "click",
        { el: this.el, multiple: this.multiple },
        this.dropdown
      );
    };

    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
      ($this = $(this)), ($next = $this.next());

      $next.slideToggle();
      $this.parent().toggleClass("open");

      if (!e.data.multiple) {
        $el
          .find(".navigation-sublist")
          .not($next)
          .slideUp()
          .parent()
          .removeClass("open");
      }
    };

    var accordion = new Accordion($("#accordion"), false);
  });

  /**Slider gallery product*/
  $(".cd-gallery").slick({
    infinite: true,
    autoplay: false,
    adaptiveHeight: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /****Close*****/
  /*top-form validation*/
  if (document.getElementById("top-form")) {
    var validation = new Validation();
    validation.init({
      ajax: true,
      ajaxUrl: myajax.url,
      classItem: "main-form__field", //елемент, который нужно провалидировать
      eventElement: "#top-form-submit", //событие по клику кнопки 'Отправить'
      items: [
        //масив объектов
        {
          item: "email",
          tpl: "email",
          tplMsg: "некорректный e-mail" //объект эл.почта с сообщением о некорректном вводе
        },
        {
          item: "name",
          tpl: "kir+lat",
          tplMsg: "только буквы" //объект имя с сообщением о некорректном вводе
        },
        {
          item: "phone",
          tpl: "number",
          tplMsg: "только цыфры" //объект имя с сообщением о некорректном вводе
        },
        {
          item: "obj",
          tpl: "kir+lat",
          tplMsg: "только буквы" //объект имя с сообщением о некорректном вводе
        },
        {
          item: "time",
          tpl: "kir+lat",
          tplMsg: "только буквы" //объект имя с сообщением о некорректном вводе
        }
      ],
      ajaxSubmitSuccess: function(responseText, err, form) {
        var formData = new FormData(form); //объявляем новую FormData
        formData.append("action", "getmessage"); //задаем действие и значение
        if (!err) {
          $.ajax({
            url: myajax.url,
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
              console.log(data);
              if (data.result === "success") {
                form.reset();
              } else {
                alert("Некорректно заполнено!!");
              }
            }
          });
          return false;
        }
        return false;
      }
    });
  }
  /*top-form validation*/

  /*fileinput script*/
  $("#fileinput-1").fileinput();
  /*close fileinput script*/

  /*scroll block*/
  var element = $("#sidebar"); //елемент, который необходимо сделать фиксированным
  if (element.length > 0) {
    //проверка наличия элемента на странице
    var elementPosition = element.offset().top; //определяем позицию элемента относительно верха документа
    $(window).scroll(function() {
      //при прокрутке окна браузера
      fixedScroll(element, elementPosition, $("#footer")); //вызывается функция с заданными селекторами
    });
  }
  /*close scroll block*/

  /*add form fields in wrapper*/
  $(document).on("click", ".add-field", function(event) {
    event.preventDefault();
    var wrapper = $(this)
        .closest(".cabinet__add-company-form--wrapper")
        .next(".cabinet__add-company-form--hover-wrapper"), //влок в который добовляются поля
      count = wrapper.attr("data-count"); //счетчик

    if (count < 10) {
      //условие на максимум 10 полей
      $(this)
        .closest(".cabinet__add-company-form--wrapper")
        .next(".cabinet__add-company-form--hover-wrapper")
        .attr("data-count", parseInt(count) + 1); //увеличиваем счетчик на 1
      $(wrapper).append(
        '<div class="cabinet__add-company-form--hover-elements">' +
          '<p class="cabinet__add-company-form--title"></p>' +
          '<input class="cabinet__add-company-form--field" type="text" name="mytext[]">' +
          '<a href="#" class="show-more remove-field">удалить</a>' +
          '<p class="cabinet__add-company-form--notice"></p>' +
          "</div>"
      ); //добавляем поля
    }
  });
  $(document).on("click", ".remove-field", function(event) {
    event.preventDefault();
    var wrapper = $(this).closest(".cabinet__add-company-form--hover-wrapper"), //влок в который добовляются поля
      addedBox = $(this).closest(".cabinet__add-company-form--hover-elements"), //элементы, которые добавляются
      count = wrapper.attr("data-count"); //счетчик
    addedBox.remove();
    wrapper.attr("data-count", parseInt(count) - 1); //увеличиваем счетчик на 1
  });
  /*close add form fields in wrapper*/

  /*find img-tag in text block and wraps it up in "a"-tag*/
  $(".business__descr p")
    .find("img")
    .each(function() {
      $(this).addClass("newsImg");
      $(this).wrap(
        '<a href="' + $(this).attr("src") + '" data-lightbox="image-1"></a>'
      );
      $(this).css({ width: "100%", height: "100%" });
    });
  /*close find img in text block and wraps it up in "a"-tag*/
});

function fixedScroll(element, elementPosition, blockElement) {
  //функция фиксированногоблока, с селекторами элемента, его позиционирования и преграждающего блока
  var top = $(document).scrollTop(), //значение отступа прокрутки сверху для первого элемента
    blockingElement = blockElement.offset().top, //позиция блокирующего блока отностительно верха документа
    height = element.outerHeight(); //высота элемента, включающая внутренние и внешние отступы
  if (top > elementPosition && top < blockingElement - height) {
    //
    element.addClass("fixed").removeAttr("style");
  } else if (top > blockingElement - height) {
    element
      .removeClass("fixed")
      .css({ position: "absolute", bottom: "50px", right: "0" });
  } else {
    element.removeClass("fixed");
  }
}

/*go to top*/
$("#go_top").click(function(event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
