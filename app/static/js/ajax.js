$(document).ready(function() {	
  function changeColor() {
      if ($('body').hasClass('white')) {
          $('body').removeClass('white');
          $('body').addClass('black');
          $('h1').removeClass('black');
          $('h1').addClass('white');
      }
      else {
          $('body').removeClass('black');
          $('body').addClass('white');
          $('h1').removeClass('white');
          $('h1').addClass('black');
      }
  }
  setInterval(changeColor, 3000);

});