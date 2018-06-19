$(document).ready(function () {

  // animation for the desktopHeader
  let lastScrollTop = 0;
  let desktopHeader = $('#header #desktopHeader');
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
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
  let cross = $('#mobileHeader .cross');
  let hamburgerBtn = $('#mobileHeader .hamburgerBtn');
  let hamburgerMenu = $('#mobileHeader .hamburgerMenu');
  let html = $('html');


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
  }

});