'use strict';

$(function () {
  // Поддержка svg спрайтов в IE11
  svg4everybody();

  // Карусель новостей
  $('#news-carousel').slick({
    appendArrows: '#news-container',
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/icons-sprite.svg#icon-angle"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Мобильное меню
  $('#pull').on('click', function() {
    var button = $(this);
    
    if (window.innerWidth < 990) {
      $.fancybox.open({
        src: '#mobile-modal',
        type: 'inline',
        opts: {
          buttons: [],
          hash: false,
          arrows: false,
          infobar: false,
          hideScrollbar: true,
          transitionEffect: 'fade',
          animationEffect: 'fade',
          closeExisting: true,
          transitionDuration: 200,
          autoFocus: false,
          loop: false,
          modal: true,
          baseTpl:
            '<div class="fancybox-container fancybox-container_nav" role="dialog" tabindex="-1">' +
            '<div class="fancybox-inner">' +
            '<div class="fancybox-stage"></div>' +
            '</div>' +
            '</div>',
          beforeShow: function() {
            button.addClass('active-pull');
            $('#mobile-modal').prepend('<div class="modal-close" data-fancybox-close></div>');
          },
          afterShow: function() {
            $('body').addClass('no-scrollable');
          },
          afterClose: function() {
            $('body').removeClass('no-scrollable');
            button.removeClass('active-pull');
            $('#mobile-modal .modal-close').remove();
          }
        }
      });
    }
  });

  $(window).bind('load resize', function() {
    if (window.innerWidth > 989) {
      if ($('#pull').hasClass('active-pull')) {
        $.fancybox.close();
      }
    }
  });

  // Маска телефона
  $('input[type=tel]').mask('+7 (999) 999-99-99');

  // Кнопка наверх
  $('#button-up').on('click', function() {
    $('body, html').animate({scrollTop: 0}, 500);
  });

  // Модальные окна
  $('[data-fancybox]').fancybox({
    buttons: [],
    hash: false,
    arrows: false,
    infobar: false,
    transitionEffect: 'fade',
    animationEffect: 'fade',
    closeExisting: true,
    transitionDuration: 200,
    autoFocus: false,
    keyboard: false,
    toolbar: false,
    touch: false,
    smallBtn: false,
    afterShow: function() {
      $('body').addClass('no-scrollable');
    },
    afterClose: function() {
      $('body').removeClass('no-scrollable');
    }
  });

  // Стилизация селекта выбора языка
  $('#country').styler();

  // Модальная форма сообщения
  $('#message-form-heading').on('click', function() {
    var parentContainer = $(this).closest('.message-form');
    var contentForm = parentContainer.find('.message-form__content');

    if (contentForm.length) {
      if (parentContainer.hasClass('active')) {
        parentContainer.removeClass('active');
        contentForm.stop(true, true).slideUp(200);
      } else {
        parentContainer.addClass('active');
        contentForm.stop(true, true).slideDown(200);
      }
    }
  });

  $('#message-form-close').on('click', function() {
    var parentContainer = $(this).closest('.message-form');
    var contentForm = parentContainer.find('.message-form__content');

    if (parentContainer.hasClass('active')) {
      parentContainer.removeClass('active');
      contentForm.stop(true, true).slideUp(200);
    }
  });
});

// Карта
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map('map', {
    center: [55.65578806907723, 37.5514835],
    zoom: 17,
    controls: ['zoomControl']
  });

  var myPlacemark = new ymaps.Placemark([55.65578806907723, 37.5514835], {}, {
    preset: 'islands#blueDotIcon'
  });

  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark); 
}