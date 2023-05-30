let isMenuVisible = false;
const mainNav = $('#main-navigation');
const mainNavBg = $('#main-navigation .bg');
const menubar = $('#main-navigation #menubar');
const navBtn = $('#nav-button');
const navBtnImage = $('#nav-button img');


$(document).ready(function () {
    changeNavClass();
    $(window).resize(changeNavClass);
    navBtn.on('click', navBtnClick);
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
        navBtn.attr('aria-expanded', 'true');
        navBtn.animate({opacity: 0}, 'fast', () => {
            navBtnImage.attr('src', 'assets/images/icon-menu-close.svg')
        });
        navBtn.animate({opacity: 1}, 'fast');
    } else {
        mainNavBg.fadeToggle('fast');
        menubar.addClass('invisible');
        menubar.removeClass('visible');
        navBtn.animate({opacity: 0}, 'fast', () => {
            navBtnImage.attr('src', 'assets/images/icon-menu.svg')
        });
        navBtn.animate({opacity: 1}, 'fast');
        setTimeout(function () {
            mainNav.css('display', 'none');
            isMenuVisible = false;
            navBtn.removeAttr('aria-expanded');
        }, 301)
    }
}