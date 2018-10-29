(function ($) {
    'use strict';

    // :: Index of Plugins Active Code :: //

    // :: 1.0 Preloader Active Code
    // :: 2.0 Fullscreen Active Code
    // :: 3.0 Sticky Active Code
    // :: 4.0 Tooltip Active Code
    // :: 5.0 Nicescroll Active Code
    // :: 6.0 Owl Carousel Slider
    // :: 7.0 Search Btn Active Code
    // :: 8.0 Progress Bar Active Code
    // :: 9.0 CounterUp Active Code
    // :: 10.0 ScrollUp Active Code
    // :: 11.0 PreventDefault a Click
    // :: 12.0 wow Active Code

    var $window = $(window);

    // :: 1.0 Preloader Active Code
    $window.on('load', function () {
      console.log("load");
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });



})(jQuery);
