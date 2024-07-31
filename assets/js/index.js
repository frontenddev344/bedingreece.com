// Menu Toggle JS Start
$(document).ready(function () {
    $(".menu-icon").click(function () {
      $("body").addClass("menuToggle");
    });
    $(".close-icon").click(function () {
      $("body").removeClass("menuToggle");
    });
  });
  // Menu Toggle JS End





// Dropdown JS Start
jQuery(document).ready(function (e) {
  function t(t) {
      e(t).bind("click", function (t) {
          t.preventDefault();
          e(this).parent().fadeOut()
      })
  }
  e(".dropdown-toggle").click(function () {
      var t = e(this).parents(".button-dropdown").children(".dropdown").is(":hidden");
      e(".button-dropdown .dropdown").hide();
      e(".button-dropdown .dropdown-toggle").removeClass("dropping");
      if (t) {
          e(this).parents(".button-dropdown").children(".dropdown").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("dropping")
      }
  });
  e(document).bind("click", function (t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown").hide();
  });
  e(document).bind("click", function (t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("dropping");
  })
});
// Dropdown JS End


$(document).ready(function(){
  $(window).scroll(function(){
    var header = $("header");
    header.toggleClass("fixed-header", $(window).scrollTop() > 0 );
  });
});


AOS.init();