$(document).ready(function () {

  // animation for the desktopHeader
  var lastScrollTop = 0;
  var desktopHeader = $('#header #desktopHeader');
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      if (Modernizr.mq('(min-width: 768px)')) {
        desktopHeader.fadeOut();
      }
    } else {
      if (Modernizr.mq('(min-width: 768px)')) {
        desktopHeader.fadeIn();
      }
    }
    lastScrollTop = scrollTop;
  });

  //-------------------- Dropdown menu --------------------

  // Define the needed variables
  var cross = $('#mobileHeader .cross');
  var hamburgerBtn = $('#mobileHeader .hamburgerBtn');
  var hamburgerMenu = $('#mobileHeader .hamburgerMenu');
  var html = $('html');
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  console.log(iOS)
  if (iOS) {
    $('.hamburgerBtn').click(function () {
      $('.hamburgerMenu').css({
        display: 'block'
      });
      $('.cross').css({
        display: 'block'
      });
      $('.hamburgerBtn').css({
        display: 'none'
      });
    })
    $('.cross').click(function () {
      $('.hamburgerMenu').css({
        display: 'none'
      });
      $('.cross').css({
        display: 'none'
      });
      $('.hamburgerBtn').css({
        display: 'block'
      });
    })
  } else {
    // when click on hamburger menu, show links and cross, hide hamburger image
    hamburgerBtn.on('click', showLinks);

    // when click on cross, hide links and cross, show hamburger image

    cross.on('click', hideLinks);
    $('#header #mobileHeader .hamburgerMenu #hamburgerDropdown a').on('click', hideLinks);
    $('#header #mobileHeader .headerIcons .logo').on('click', hideLinks)

    // showLink function

    function showLinks() {
      hamburgerMenu.slideDown(500);
      hamburgerBtn.hide(500);
      cross.delay(350).show(500);
      html.addClass('stop-scrolling');
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
      $('body, html').unbind('touchmove touchstart');
    };
  };
});