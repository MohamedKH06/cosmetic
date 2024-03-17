$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 8000,
        loop: true,
        // items: 3,
        items: 1,
        // center: true,
        onInitialized: counter, //When the plugin has initialized.
        onTranslated: counter //When the translation of the stage has finished.
    });

    let owl = $('.owl-carousel');

    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    })

    $('.owl-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    function counter(event) {
        var element = event.target;         // DOM element, in this example .owl-carousel
        var items = event.item.count;     // Number of items
        var item = event.item.index - 1;     // Position of the current item

        // it loop is true then reset counter from 1
        if (item > items) {
            item = item - items
        }

        $('.slide-count').text("0" + item)
        $('.slide-items').text("0" + items)
    }

//popup
    $('.btn-close,.btn-add,.btn-heart,.popup-overlay').click(function(){
        $('.popup2').toggleClass('active')
    })

    $('.prodect-expand,.btn-closed,.popup-overla').click(function(){
        $('.popup1').toggleClass('active')
    })
//nn
$(".plus").click(function(){
    $('.coo input').val( function(i, oldval) {
    return ++oldval;
    });
  });
  
  $(".minus").click(function(){
    $('.coo input').val( function(i, oldval) {
    if($('.coo input').val()==1){
        $('.coo input').val()=1
    }else{
    return --oldval;
    }
    });
  });


  // Menu Fixed
  $(window).scroll(function(){
      if($(window).scrollTop()>=400){
          $('.header-top').addClass("menu-fixed")
      }else{
        $('.header-top').removeClass("menu-fixed")
      }
  })

  ////nohayla
  $(function () {
    $('.slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $('.count-num').rCounter({
        duration: 30
    });
})
});
