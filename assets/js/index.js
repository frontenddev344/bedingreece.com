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


// //Cookies JS Start

function SetCookie(cookieName, cookieValue, nDays) {
  "use strict";
  var today = new Date();
  var expire = new Date();
  if (nDays == null || nDays == 0) nDays = 1;
  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie =
    cookieName +
    "=" +
    escape(cookieValue) +
    ";expires=" +
    expire.toGMTString() +
    "; path=/";
}
function ReadCookie(cookieName) {
  "use strict";
  var theCookie = " " + document.cookie;
  var ind = theCookie.indexOf(" " + cookieName + "=");
  if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
  if (ind == -1 || cookieName == "") return "";
  var ind1 = theCookie.indexOf(";", ind + 1);
  if (ind1 == -1) ind1 = theCookie.length;
  return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}
function DeleteCookie(cookieName) {
  "use strict";
  var today = new Date();
  var expire = new Date() - 30;
  expire.setTime(today.getTime() - 3600000 * 24 * 90);
  document.cookie =
    cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}
function AcceptCookies() {
  SetCookie("sgCookies", true, 30);
  jQuery("#cookie-bar").hide();
}
$(document).ready(function (e) {
  var toTop = $(
    "<div id='cookie-bar'><div id='contentcookie'><p>    BetYouRoom is your premier hotel comparison site for the Czech Republic. To enhance your browsing experience and provide you with tailored services, we use cookies on our website. If you would like to know more information about Cookie Policy, please review our Privacy Policy there you will find a better explanation regarding our cookies.</p><button id='Cookie' tabindex=1 onclick='AcceptCookies();'>Accept </button><div class='clear'></div></div></div>"
  ).appendTo("body");
  if (!ReadCookie("sgCookies")) {
    //If the cookie has not been set
    jQuery("#cookie-bar").show();
  } else {
    jQuery("#cookie-bar").hide();
  }
});

// //Cookies JS Start



// Header scroll js Start
$(document).ready(function(){
  $(window).scroll(function(){
    var header = $("header");
    header.toggleClass("fixed-header", $(window).scrollTop() > 0 );
  });
});

// Header scroll js End

AOS.init();


// Dropdown JS Start
$(document).ready(function(){
  $(".button-dropdown").click(function(){
    $(this).find(".dropdown").slideToggle();
  });
});
// Dropdown JS End