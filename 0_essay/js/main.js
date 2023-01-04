//슬라이드 영역//
const imageSwiper = new Swiper('.image-slide .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

const textSwiper = new Swiper('.text-slide .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 2000
  }
});
//여기까지//