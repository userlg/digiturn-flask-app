$(document).ready(function() {

  $('form').on('submit', function(event){

    $.ajax({
       data: {
         email: $('#emailInput').val(),
         password: $('#passwordInput').val()  // passwordInput
       },
       type:'POST',
       url:'/process'
    })
    .done(function(data){
      if (data.error){
        console.log('Error')
      }
      else {
       var password = document.getElementById('#passwordInput')
        console.log('Data upload')
        console.log(data)
      }
    })

    event.preventDefault()
  });

});