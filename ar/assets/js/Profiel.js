var main = function(){
        $.ajax({
            url: "https://jiraapi.momentum-sol.com/api/auth/user-profile",
            async: true,
            type: 'GET',
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
            error: function(err) {
            console.log(err)
            },
             success: function (reusalte) {
                $("#nameheader").html(reusalte.data.first_name);
                $("#emailaddries").html(reusalte.data.email);
                $("#name").val(reusalte.data.name);
                $("#email").val(reusalte.data.email);
                $("#phone").val(reusalte.data.phone);
            },
        });
      };




      $("#update").submit(
        function() 
        {
            $.ajax({
                type: 'POST',
                url: 'https://jiraapi.momentum-sol.com/api/auth/update',
                headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
                data: {
                  name: $("#name").val(),
                  email: $("#email").val()
                },
                dataType: "json",
                success: function(response) {
                  $('.email-error').text("");
                  $('.name-error').text("");
                },
                error: function(data) {
                  let daterror = JSON.parse(data.responseText);
                  if(daterror.name !== ""){
                    $('.name-error').text(daterror.name);
                  }

                  if(daterror.email !== ""){
                    $('.email-error').text(daterror.email);
                  }
                }
            })
        }
    )



    $(document).ready(main);

    $("#log_out").click( function() {
      $.ajax({
        url: 'https://jiraapi.momentum-sol.com/api/auth/logout',
        type: "POST",
        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
        success: function(data) {
            localStorage.removeItem('token');
            $("#links_logout").addClass("d-lg-inline-block"),
            $("#links_login").removeClass("d-lg-inline-block"),
            window.location='index.php'
        },
        error: function(err) {
          console.log(err)
        }
      });
      });
