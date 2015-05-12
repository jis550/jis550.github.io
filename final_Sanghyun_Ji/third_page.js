
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_header').addClass('sticky');
    } else {
        $('.main_header').removeClass('sticky');
    }
});


$('.mobile-toggle').click(function() {
    if ($('.main_header').hasClass('open-nav')) {
        $('.main_header').removeClass('open-nav');
    } else {
        $('.main_header').addClass('open-nav');
    }
});

$('.main_header li a').click(function() {
    if ($('.main_header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_header').removeClass('open-nav');
    }
});

$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 0;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

var sections = $('section'), nav = $('nav'), nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});