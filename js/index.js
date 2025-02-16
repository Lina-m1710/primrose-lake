$('.features-list').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  cssEase: 'linear',
  variableWidth: true,
  centerMode: true,
});

$('.gallery-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  arrows: true,
  cssEase: 'linear',
});

$('.characters-list').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  cssEase: 'linear',
  variableWidth: true,
  centerMode: true,
});

$(window).on('load resize', function() {
  if ($(window).width() < 769) {
    $('.howto-list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      cssEase: 'linear',
    });
  } else {
    $(".howto-list").slick("unslick");
  }
});

$(window).on('load resize', function() {
  if ($(window).width() < 769) {
    $('.advantages-list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      cssEase: 'linear',
    });
  } else {
    $(".howto-list").slick("unslick");
  }
});

$(window).on('load resize', function() {
  if ($(window).width() < 769) {
    $('.reviews-list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      cssEase: 'linear',
      rows: 2
    });
  } else {
    $(".howto-list").slick("unslick");
  }
});


new WOW().init();


let btn = document.querySelector('.mobile-menu')
let burger = document.querySelector('.mobile-btn')
let nav = document.querySelector('.header-nav')
let item = document.querySelectorAll('.header-nav-item')

btn.addEventListener('click', function (e) {
    nav.classList.toggle('header-nav-mobile')
    burger.classList.toggle('mobile-btn-active')
    document.body.classList.toggle('body-scroll')
})

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function (e) {
        nav.classList.toggle('header-nav-mobile')
        burger.classList.toggle('mobile-btn-active')
        document.body.classList.toggle('body-scroll')
    })
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


let faqBtn = document.querySelectorAll('.faq-item-btn')
let faqItem = document.querySelectorAll('.faq-item')

for(let f = 0; f < faqBtn.length; f++){
    faqBtn[f].addEventListener('click', function(e){
        faqItem[f].classList.toggle('faq-item-active')
    })
}
