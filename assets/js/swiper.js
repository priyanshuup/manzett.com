const swiper = new Swiper('.testimonial-main', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 5, // should equal your number of slides
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});


const heroSwiper = new Swiper('.heroswipe.swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.hero-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  }
});


  const mySwiper = new Swiper(".myAwardsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

