$(function () {
  $('.filter-recent__star').rateYo({
    starWidth: '11px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    spacing: "8px",
  });
  $('.product-list__rating').rateYo({
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

  })



  $('.slider-top__items').slick({
    arrows: false,
    dots: true,
    fade: true,
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

  var mixer = mixitup('.products__all');
  var mixer = mixitup('.design__all');


})