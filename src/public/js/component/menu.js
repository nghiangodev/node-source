var navOffset = $("#nav-bar").offset().top;
var navBar = $("#nav-bar");

var $win = $(window).scroll(function () {
    if ($win.scrollTop() > navOffset) {
        navBar.addClass('nav-bar-scrolled').removeClass('nav-bar-top');
    }
    else if ($win.scrollTop() == 0) {
        navBar.addClass('nav-bar-top').removeClass('nav-bar-scrolled');
    }
});