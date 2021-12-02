$("#myForm").submit( function() {
$.ajax({
  url: 'https://jiraapi.momentum-sol.com/api/auth/login',
  type: "POST",
  data:{
  phone: $('#phone').val(),
  password: $('#password').val(),
},
  success: function(data) {               
       console.log('Success');
       _token=data.access_token
       localStorage.setItem('token', _token);
       window.location='profile.php'
       $('.phone-error').text("");
       $('.password-error').text("");
  },
  error: function(data) {
    let daterror = JSON.parse(data.responseText);
    if(daterror.message){
      console.log(daterror.message);

      $('.message-error').text(daterror.message);
      // $('.password-error').text(daterror.message[0]);
    }
    else
    {
      $('.message-error').empty();
     
    }
    if(daterror.phone){
      $('.phone-error').text(daterror.phone[0]);
    }
    else
    {
      $('.phone-error').empty();
    }

    if(daterror.password){

      $('.password-error').text(daterror.password[0]);
    }
    else
    {
      $('.password-error').empty();
    }
   
  }
});
});



