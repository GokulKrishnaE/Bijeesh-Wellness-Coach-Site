// include html
let includes = $('[data-include]')
jQuery.each(includes, function(){
  let html = '/' + $(this).data('include') + '.html'
  $(this).load(html)
})

// intersection observer
const sections = document.querySelectorAll('.section');
const bannerSection = document.querySelector('.bannerSec');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const items = entry.target.querySelectorAll('.section-title,.subhead,.roomWrapper');
    if (entry.isIntersecting) {
      items.forEach(item=>{
        item.classList.add('visible');
      })
    } else {
      items.forEach(item=>{
        item.classList.remove('visible');
      })
    }
  });
}, observerOptions);
const bannerObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const bannerTitle = entry.target.querySelectorAll('h1');
    if (entry.isIntersecting) {
      bannerTitle.forEach(banner=>{
        banner.classList.add('visible');
      })
    } 
    else {
      bannerTitle.forEach(banner=>{
        banner.classList.remove('visible');
      })
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
bannerObserver.observe(bannerSection);


// sliders
new Swiper('.hero-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: false
  });

  new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });