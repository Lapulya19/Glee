$(function () {

   //-----------------Burger-------------//

   $('.menu__btn').on ('click', function(){
     $('.menu__list').toggleClass('menu__list--active')
   });

   $('.menu__list-item').on ('click', function(){
    $('.menu__list').removeClass('menu__list--active')
  })


  $('.filter-recent__star').rateYo({
    starWidth: '11px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    spacing: "8px",
  });
  $('.product-list__rating, .product-details__rating').rateYo({
    starWidth: '18px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    spacing: "13px",
  })
  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });


  $('.slider-thumb').slick({
    asNavFor: '.slider-big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.slider-big').slick({
    asNavFor: '.slider-thumb',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  });


  $('.slider-top__items').slick({
    arrows: false,
    dots: true,
    fade: true,
  });

   //-----------------Slider related-------------//
   $('.related__products').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow:'<button type="button" class="slick-next"><img src="images/slider/arrows-right.svg" ></button>',
    prevArrow:'<button type="button" class="slick-prev"><img src="images/slider/arrows-left.svg" ></button>',
   });

  $('.product-list__btn').on('click', function () {
    $('.product-list__btn').removeClass('product-list__btn--active')
    $(this).addClass('product-list__btn--active')
  });

  $('.button-list').on('click', function () {
    $('.product-list__all-item').addClass('product-list__all-item--line')
  });

  $('.button-grid').on('click', function () {
    $('.product-list__all-item').removeClass('product-list__all-item--line')
  });

  //-----------------Form Styler-------------//

  $('.product-details__input').styler();

  //-----------------Tabs-------------//

  $('.product-details__item').on('click', function (e) {
    e.preventDefault();
    $('.product-details__item').removeClass('product-details__item--active');
    $(this).addClass('product-details__item--active');

    $('.product-details__content-item').removeClass('product-details__content-item--active');
    $($(this).attr('href')).addClass('product-details__content-item--active');
  });

  //-----------------Mixitup-------------//

  var mixer = mixitup('.products__all');
  var mixer = mixitup('.design__all');


})