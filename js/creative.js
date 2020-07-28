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

// Countdown
const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;
let countDown = new Date("August 02, 2020 21:00:00").getTime(),
	x = setInterval(function () {
		let now = new Date().getTime(),
			distance = countDown - now;
		(document.getElementById("days").innerText = Math.floor(distance / day)),
			(document.getElementById("hours").innerText = Math.floor(
				(distance % day) / hour
			)),
			(document.getElementById("minutes").innerText = Math.floor(
				(distance % hour) / minute
			)),
			(document.getElementById("seconds").innerText = Math.floor(
				(distance % minute) / second
			));
		//do something later when date is reached
		if (distance < 0) {
			clearInterval(x);
			(document.getElementById("days").innerText = 0),
				(document.getElementById("hours").innerText = 0),
				(document.getElementById("minutes").innerText = 0),
				(document.getElementById("seconds").innerText = 0);
		}
	}, second);
// countdown end