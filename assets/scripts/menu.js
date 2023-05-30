let isMenuVisible = false;
const mainNav = $('#main-navigation');
const mainNavBg = $('#main-navigation .bg');
const menubar = $('#main-navigation #menubar');

$(document).ready(function () {
    changeNavClass();
    $(window).resize(changeNavClass);
    $('#nav-button').on('click', navBtnClick);
})

function changeNavClass() {
    if ($(document).width() < 580) {
        mainNav.removeClass('desktop-version');
        mainNav.addClass('mobile-version');
    } else {
        mainNav.addClass('desktop-version');
        mainNav.removeClass('mobile-version');
    }

    mainNav.removeAttr('style');
    mainNavBg.removeAttr('style');
    isMenuVisible = false;
}

function navBtnClick() {
    if (!isMenuVisible) {
        mainNav.css('display', 'block');
        mainNavBg.fadeToggle('fast');
        menubar.addClass('visible');
        menubar.removeClass('invisible');
        isMenuVisible = true;
    } else {
        mainNavBg.fadeToggle('fast');
        menubar.addClass('invisible');
        menubar.removeClass('visible');
        setTimeout(function () {
            mainNav.css('display', 'none');
            isMenuVisible = false;
        }, 301)
    }
}