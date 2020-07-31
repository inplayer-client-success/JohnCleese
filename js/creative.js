// ACCORDION 
$(".toggle").click(function (e) {
  e.preventDefault();
  let inner = $(this).next(".inner");

  if ($(this).hasClass("active")) {
    inner.removeClass("show");
    inner.slideUp(350);
    $(this).removeClass("active");
  } else {
    $(this)
      .closest(".accordion")
      .find("a.active")
      .removeClass("active");
    $(this)
      .closest(".accordion")
      .find(".inner")
      .not(inner)
      .removeClass("show")
      .slideUp(350);
    inner.slideDown(350);
    inner.addClass("show");
    $(this).addClass("active");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('.page-scroll').bind('click', function (event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: ($($anchor.attr('href')).offset().top - 50)
  }, 250, 'easeOutSine');
  event.preventDefault();
});


// back to top button
$(document).ready(function () {
  var offset = 550;
  var duration = 300;

  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
      $('.back-to-top').fadeOut(duration);
    }

  });

  $('.back-to-top').click(function (event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })


});

$(function () {
  var toggle = $('#toggle');

  $('#menu a').on('click', function () {
    console.log()
    if ($(window).width() < 790) {
      $('#toggle').click();
    }

  });

  toggle.on('click', function () {
    $(this).toggleClass('is-active');

    $("#menu").addClass('flex');
    $('#menu').toggleClass('slideInDown slideOutUp');
    $('body').toggleClass('overflow');
  })
})

// countDown
function assetCountdown() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date('August 02, 2020 20:00:00 GMT+1').getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById('cd-days').innerText = Math.floor(distance / (day)),
        document.getElementById('cd-hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('cd-minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('cd-seconds').innerText = Math.floor((distance % (minute)) / second);

      if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown-container').style.display = "none";
      }

    }, second);
}

$(document).ready(function () {
  assetCountdown();
});
