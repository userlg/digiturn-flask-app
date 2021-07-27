$(document).ready(function () {
  function getAJAX() {

    var result = $.ajax({
      
      async: true,
      url: '/process',
      type: 'GET',
      dataType: 'text',
      success: function () {
        console.log('Working');
    },

    error: function(){
      console.log('Error detected');
    }

    }).resposeText;

  }

  setInterval(getAJAX, 3000);


});