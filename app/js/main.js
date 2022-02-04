$(function(){
  $('.filter-recent__star').rateYo({
    starWidth: '11px',
    normalFill:'#d6d6d6',
    ratedFill:'#ffcc00',
    readOnly:true,
    spacing   : "8px",
  });
 $('.filter-price__input').ionRangeSlider({
   type: 'double',
   onStart: function (data){
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
   dots:true,
   fade:true,
  });

  var mixer = mixitup('.products__all');
  var mixer = mixitup('.design__all');

  
  // data-rateyo-rating="4"
  //  only html
})