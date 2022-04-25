let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

$(function(){
$(window).scroll(function () {
if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
else $(".lentop").fadeOut();
});
$(".lentop").click(function () {
$("body,html").animate({scrollTop: 0}, "slow");
});
});
