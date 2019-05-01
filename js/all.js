$(document).ready(function() {
  $('.menubutton').on('click',  function(e){
     e.preventDefault();
     $('.header').toggleClass('menu-show');
 });
});