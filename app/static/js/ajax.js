$(document).ready(function () {
  function getAJAX(event) {

    var result = $.ajax({
      data: {msg:$('msg').val()},
      async: true,
      url: '/process',
      type: 'GET',
      dataType: 'text',
      success: function (data) {
        console.log('Working');
        console.log(data)
    },

    error: function(){
      console.log('Error detected');
    }
    }).resposeText;
    
  }

  setInterval(getAJAX, 3000);
 
});