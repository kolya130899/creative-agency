var $menu = $('.my-nav-list');

$(document).mouseup(function (e) {
   if (!$menu.is(e.target) //if not menu...
   && $menu.has(e.target).length === 0)//...and not child of menu
   {
     $menu.removeClass('is-active');
     $('.my-toggle-button').removeClass('is-hidden');//show toggle
  }
 });

$('.my-toggle-button').click(function () {
  $menu.toggleClass('is-active');//show menu
  $('.my-toggle-button').toggleClass('is-hidden');//hide toggle button
});

$('#close').mouseup(function (e) {
	$menu.removeClass('is-active');//hide menu
	$('.my-toggle-button').removeClass('is-hidden');//show toggle
});
