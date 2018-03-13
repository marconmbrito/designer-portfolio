//aos scroll animations
AOS.init();
// end of aos

//fade in animations
anime({
  targets: '.header h1',
  delay: 500,
  opacity: 1
});

anime({
  targets: '.header h1 span:first-of-type',
  delay: 1000,
  opacity: 1
});

anime({
  targets: '.header h1 span:nth-of-type(2)',
  delay: 1500,
  opacity: 1,
});
anime({
  targets: '.header h1 span:nth-of-type(3)',
  delay: 1500,
  opacity: 1,
});

anime({
  targets: '.header p',
  delay: 2000,
  opacity: 1
});

anime({
  targets: '.cta',
  delay: 2500,
  bottom: '2em'
}); //end fade in animations

//MENU OPENING
$('.menu').click(function() {
  $('.navbar').toggleClass('is-open');
});

//window scroll animations
var prev = 0;
var $window = $(window);
var nav = $('nav');

$window.scroll(function() {
  var scrollTop = $window.scrollTop();
  nav.toggleClass('nav-scroll', scrollTop > prev);
  prev = scrollTop;
});

//opacity on scroll
var target = $('header h1, header p');
var targetHeight = target.outerHeight();

$window.scroll(function(e) {
  var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
  if (scrollPercent >= 0) {
    target.css('opacity', scrollPercent);
  }
}); //end of opacity on scroll

//hover on social media
$(".icons a").hover(
  function() {
    $(this).siblings().addClass("hover");
  },
  function() {
    $(this).siblings().removeClass("hover");
  }
);

//smooth scrolling on window
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
