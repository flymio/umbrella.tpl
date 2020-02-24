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
      }
    ]
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