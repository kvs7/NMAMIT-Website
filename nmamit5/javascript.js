var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  
  (function($) {
    $(function() {
     var ds = {
       'name': 'Lao Lao',
       'title': 'general manager',
       'children': [
         { 'name': 'Bo Miao', 'title': 'department manager' },
         { 'name': 'Su Miao', 'title': 'department manager',},
          { 'name': 'Hong Miao', 'title': 'department manager' },
          { 'name': 'Chun Miao', 'title': 'department manager' }
        ]
      };
  
      var oc = $('#chart-container').orgchart({
        'data' : ds,
        'nodeContent': 'title',
        'direction': 'l2r',
        'pan':true
      });
  
    });
  })(jQuery);