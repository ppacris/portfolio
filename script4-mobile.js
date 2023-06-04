var navActive = 'nav__drawer__active';
var navDrawer = $('.nav__drawer__wrapper');
var navOverlay = $('.nav__btn--overlay');
var navBtn = $('.nav__btn');
var navContent = $('.nav__drawer__content ul');

$('.nav__btn').click(function () {
	navDrawer.addClass(navActive);
	navOverlay.fadeIn(1);
	navBtn.fadeOut(1);
	navContent.fadeIn(1);
});

$('.nav__close__btn').click(function () {
	navDrawer.removeClass(navActive);
	navContent.fadeOut(1);
	navOverlay.fadeOut(1);
	navBtn.fadeIn(1);
});

$('.nav__drawer__content ul li a').click(function () {
	navDrawer.removeClass(navActive);
	navContent.fadeOut(1);
	navOverlay.fadeOut(1);
	navBtn.fadeIn(1);
});


$(document).mousedown(function (e) {
	var container = navDrawer;

	if (!container.is(e.target) &&
		container.has(e.target).length == 0) {

		container.removeClass(navActive);
		navOverlay.fadeOut(1);
		navBtn.fadeIn(1);
	}
});
