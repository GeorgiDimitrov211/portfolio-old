$(document).ready(function () {

  // ------------------------sticky navigation------------------------

  // Define the needed variables
  var homeHeight = $('#home').outerHeight() - 1;
  var mobileHeader = $('#bodyHomePage #header #mobileHeader');
  var headerIcons = $('#header #mobileHeader .headerIcons');
  var hamburgerBg = $('#header #mobileHeader .hamburgerBg');

  $(window).scroll(function () {
    if ($(window).scrollTop() > homeHeight) {
      mobileHeader.css('position', 'fixed');
      hamburgerBg.css('opacity', '0.98');
      headerIcons.css('background', '#252525')
    } else {
      mobileHeader.css('position', 'absolute');
      hamburgerBg.css('opacity', '0');
      headerIcons.css('background', '')
    }
  })
  // ------------------------ if iOS, another way for the navigation ------------------------

  // Define the needed variables
  var cross = $('#header #mobileHeader .headerIcons .cross');
  var hamburgerBtn = $('#header #mobileHeader .headerIcons .hamburgerBtn');
  var hamburgerMenu = $('#header #mobileHeader .hamburgerMenu');
  var html = $('html');
  var logo = $('#header #mobileHeader .headerIcons .logo');
  var links = $('#header #mobileHeader .hamburgerMenu #hamburgerDropdown a');
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;


  if (iOS) {
    hamburgerBtn.click(function () {
      hamburgerMenu.css({
        display: 'block'
      });
      cross.css({
        display: 'block'
      });
      hamburgerBtn.css({
        display: 'none'
      });
      html.addClass('stop-scrolling');
      hamburgerBg.css('opacity', '0.98');
      $('body, html').bind('touchmove touchstart', function (e) {
        e.preventDefault()
      });
    })
    cross.click(function () {
      hamburgerBg.css('opacity', '0');
      hamburgerMenu.css({
        display: 'none'
      });
      cross.css({
        display: 'none'
      });
      hamburgerBtn.css({
        display: 'block'
      });
      html.removeClass('stop-scrolling');
      $('body, html').unbind('touchmove touchstart');
    })
    links.on('click', function () {
      hamburgerBg.css('opacity', '0');
      hamburgerMenu.css({
        display: 'none'
      });
      cross.css({
        display: 'none'
      });
      hamburgerBtn.css({
        display: 'block'
      });
      html.removeClass('stop-scrolling');
      $('body, html').unbind('touchmove touchstart');
    })
    logo.on('click', function () {
      hamburgerBg.css('opacity', '0');
      hamburgerMenu.css({
        display: 'none'
      });
      cross.css({
        display: 'none'
      });
      hamburgerBtn.css({
        display: 'block'
      });
      html.removeClass('stop-scrolling');
      $('body, html').unbind('touchmove touchstart');
    })
  } else {
    // / ------------------------if not iOS------------------------

    // when click on hamburger menu, show links and cross, hide hamburger image
    hamburgerBtn.on('click', showLinks);

    // when click on cross, hide links and cross, show hamburger image

    cross.on('click', hideLinks);
    links.on('click', hideLinks);
    logo.on('click', hideLinks)

    // showLink function

    function showLinks() {
      hamburgerMenu.slideDown(500);
      hamburgerBtn.hide(500);
      cross.delay(350).show(500);
      html.addClass('stop-scrolling');
      hamburgerBg.css('opacity', '0.98');
      $('body, html').bind('touchmove touchstart', function (e) {
        e.preventDefault()
      });
    }

    // hideLinks function
    function hideLinks() {
      hamburgerMenu.slideUp(500);
      hamburgerBtn.delay(350).show(500);
      cross.hide(500);
      html.removeClass('stop-scrolling');
      hamburgerBg.css('opacity', '0');
      $('body, html').unbind('touchmove touchstart');
    };
  };

  // --------------------------- Smooth scrolling  ---------------------------
    $(document).on('click', 'a[href^="#"]', function (event) {
      // remove default
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 800);
  });

});