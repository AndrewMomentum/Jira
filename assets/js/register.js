
      $("#register").submit(function(){
      //   if($("#name_register").value=" "){
      //       $('.name-error').text("Please Enter The Name");
      //     }
      //   if($("#email_register").value=" "){
      //       $('.email-error').text("Please Enter The Email");
      //     }
      //   if($("#phone_register").value=" "){
      //       $('.phone-error').text("Please Enter The Phone Number");
      //     }
      //   if($("#password_register").value=" "){
      //       $('.password-error').text("Please Enter The Password");
      //     }
      //     if($("#password_register").value !== $("#password_confirmation_register").value){
      //       $('.password_confirmation_error').text("Passwords do not match");
      //     }
      // });

      // // This Function Depends on checking the number of elements of a variable
      // $('#phone_register').on('input', function() {
      //   if (this.value.length > this.maxLength){
      //       this.value = this.value.slice(0, this.maxLength)
      //   }

      $.ajax({
        url: 'https://jiraapi.momentum-sol.com/api/auth/register',
        type: "POST",
        data:{
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        username: $('#username').val(),
        password: $('#password').val(),
        password_confirmation:$("#password_confirmation").val()
      },
        success: function(data) {               
         
             _token=data.access_token
             localStorage.setItem('token', _token);
             window.location='profile.php'
             $('.phone-error').text("");
             $('.password-error').text("");
        },
        error: function(data) {
          let daterror = JSON.parse(data.responseText);
    ///first_name
          if(daterror.first_name){
            $('.first_name-error').text(daterror.first_name[0])
        
          }
          else
          {
            $('.first_name-error').empty()
          }

           ///last_name
           if(daterror.last_name){
            $('.last_name-error').text(daterror.last_name[0])
        
          }
          else
          {
            $('.last_name-error').empty()
          }
/////email
          if(daterror.email){
           
            $('.email-error').text(daterror.email)
        
          }
          else
          {
            $('.email-error').empty()
          }

        ///phone
          if(daterror.phone){
            $('.phone-error').text(daterror.phone[0])
       
          }
          else
          {
            $('.phone-error').empty()
          }

           ///password
           if(daterror.password){
            $('.password-error').text(daterror.password[0])
            
          }
          else
          {
            $('.password-error').empty()
          }


             ///username
             if(daterror.username){
              $('.username-error').text(daterror.username[0])
              
            }
            else
            {
              $('.username-error').empty()
            }

        
         
        }
      });

     
      });

      /*
      
      
       id="name_register"
 id="email_register"
 id="phone_register"
id="password_register" 
 id="password_confirmation_register"
      
      */
