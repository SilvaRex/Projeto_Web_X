$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop: true,
      items: 1,
      nav: false
    });
    owl.on('changed.owl.carousel', function(event) {
      var currentItem = event.item.index + 1;
      var totalItems = event.item.count;
      $('#current-item-number').text(currentItem);
      $('#total-item-number').text(totalItems);
    });
    $('.owl-next').click(function() {
      owl.trigger('next.owl.carousel');
    });
    $('.owl-prev').click(function() {
      owl.trigger('prev.owl.carousel');
    });
  });
  