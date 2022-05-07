
$(function () {
    $(document).scroll(function () {
      var $nav = $(".header__container");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      console.log("test");
    });
  });

