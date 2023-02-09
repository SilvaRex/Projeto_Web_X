$(document).ready(function() {
    $('.second-carousel-items').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 6
        },
        1000: {
          items: 6
        }
      }
    });

    $('.filter-btn').click(function() {
      var value = $(this).attr('data-filter');
      if(value === "all") {
        $('.second-carousel-items .item-if').show('1000');
      } else {
        $('.second-carousel-items .item-if').not('[data-filter="'+value+'"]').hide('3000');
        $('.second-carousel-items .item-if[data-filter="'+value+'"]').show('3000');
      }
    });
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
      });
  });