$(document).ready(function () {

  /*
  * INDEX
  */
  function modifyIndexPage() {
    if (window.location.pathname.length === 1) {
      var mainMenu = document.querySelector('.ui.borderless.menu');;
      mainMenu.style.setProperty('border-bottom', '1px solid #22242626');
    }
  }

  /*
  * BLOG
  */
  function modifyBlogPage() {
    if (window.location.pathname.indexOf('blogg') !== -1) {
      var mainMenu = document.querySelector('.ui.borderless.menu');
      mainMenu.style.setProperty('background', '#534a6d', 'important');

      document.querySelector(".ui.borderless.menu .ui.container .header.item .logo").src = "/assets/images/logo/logo-inverted.svg";

      var mainMenuRightLinks = document.querySelectorAll('.ui.borderless.menu .ui.container a');
      mainMenuRightLinks.forEach(link => {
        link.style.setProperty('color', '#ffd9d8', 'important');
      });

      var headers = document.querySelectorAll('.blogg .ui.header');
      headers.forEach(header => {
        header.style.setProperty('color', '#32325e', 'important');
      });

    }
  }

  /*
  * MENU
  */

  function serviceMenu() {
    $('.ui.menu.services > .item').on('click', function (event) {
      removeActive($(this), 0);
      $(this).addClass('active');
      var cl = $(this).attr("class").split(/\s+/);
      var sectionToActivate = cl.filter(c => c !== 'item' && c !== 'active')[0];
      displayAssociatedContent(sectionToActivate);
    });
  }

  function displayAssociatedContent(sectionToActivate) {
    var contentSelector = '.ui.segment.content';
    var activeSelector = '.ui.segment.content.' + sectionToActivate;
    removeActive($(contentSelector), 1);
    $(activeSelector).addClass('active');
  }

  // 0 = menu, 1 = content
  function removeActive(selector, section) {
    var elements = selector;
    if (section === 0) {
      elements = selector.parent().find('.item');
    }
    [].forEach.call(elements, function (el) {
      el.classList.remove("active");
    });
  }

  /*
  * FAQ
  */
  function accordion() {
    $(".ui.accordion").accordion();
  }

  /*
   * DROPDOWN
   */

  function dropdown() {
    $('.ui.dropdown').dropdown();
  }

  /*
  * MOUSE ANIMATION
  */
  function initMouse() {
    $('a.scroll-link').click(function (e) {
      e.preventDefault();
      $id = $(this).attr('href');
      $('body,html').animate({
        scrollTop: $($id).offset().top - 20
      }, 750);
    });
  }

  /*
   * Newsletter input
   */
  function clearNewletterInputAfterSubmit() {
    $("#mc-embedded-subscribe").click(function () {
      setTimeout(function () {
        $('#mce-EMAIL').val('');
      }, 2000);

    });
  }

  modifyIndexPage();
  initMouse();
  modifyBlogPage();
  serviceMenu();
  accordion();
  dropdown();
  clearNewletterInputAfterSubmit();

});
