import  * as encoder  from './utf-8.js'; //utf8Decode

$(document).ready(function () {
  function getAJAX(event) {

    var result = $.ajax({
      data: { msg: $('response').val() },
      async: true,
      url: '/process',
      type: 'GET',
      dataType: 'json',
      charset: 'utf-8',
      success: function (data) {
        //console.log('Working AJAX');
        get_data(data);
      },

      error: function () {
        console.log('Error detected');
      }
    }).resposeText;

  }

  function get_data(data) {
    var res = encoder.utf8Decode(data);
  
    //console.log(encoder.utf8Decode(res));
    var i=0;
    let json = JSON.parse(data);
  
   /* for (i of json['vendedores']) {
       console.log(i.id);
       console.log(i.name);
       console.log(i.last_name);
       console.log(i.status);
  
    }*/
  }

  setInterval(getAJAX, 5000);

});