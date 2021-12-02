<?php include 'header.php';?>

    <!--==============================
      Body login Area
    ==============================-->
    <section class="vs-about-wrapper position-relative  space-top space-md-bottom">
        <div class="main mt-5">
            <div class="container">
                <div class="row profile-content" style="justify-content: space-around">
                    
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-lg-5 mb-md-5 d-none d-sm-none d-md-block d-lg-block d-xl-block">
                    <div class="aside p-5">
                        <ul class="nav nav-tabs" id="myTab" role="tablist" style="display: inline-block;">
                            <li class="nav-item active" style="display: table-cell; width: 93%; 
                            border-bottom: 1px solid #bfbdbd;">
                                    <div class="float-left mb-3 ml-3 mt-2" style="padding-top: 15px;">
                                        <h4 id="nameheader"></h4>
                                        <span id="emailaddries"></span>
                                    </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="profile.php" role="tab" aria-controls="profile" aria-selected="true">
                                    <i class="fas fa-user"></i>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="addresses-tab" data-toggle="tab" role="tab" aria-controls="addresses" href="address.php" aria-selected="false">
                                    <i class="fas fa-address-card"></i>
                                    <span>Addresses</span>
                                </a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" id="order-tab" data-toggle="tab" href="#order" role="tab" aria-controls="order" aria-selected="false">
                                    <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                                    <span>Orders</span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" id="message-tab" data-toggle="tab" href="#message" role="tab" aria-controls="message" aria-selected="false">
                                    <i class="fas fa-comment-alt"></i>
                                    <span>Messages</span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="contact.php" role="tab" aria-controls="contact" aria-selected="false">
                                    <i class="fa fa-life-ring" aria-hidden="true"></i>
                                    <span>Contact Support</span>
                                </a>
                            </li>
                            <button type="button" class="btn"  id="log_out">
                                logout
                            </button>
                        </ul>
                    </div>
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-12 my-5">
                    <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="addres_header">
                            <h5>Add Addresses</h5>
                        </div>
                    <hr>

                    <form onsubmit="return false;" novalidate id="addaddres">

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="name_addres">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Address</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="address">
                            </div>
                        </div>


                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Floor</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="floor">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Apartment</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="apartment">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Area</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="area">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">City</label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="city">
                            </div>
                        </div>

                        <div class="form-group row">
                          <div class="col-sm-10">
                            <button type="submit" class="btn edit_button">Add Address </button>
                          </div>
                        </div>
                      </form>

                    </div>
                
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
<?php include 'footer.php';?>

    <!--Profiel Js File -->
    <script src="assets/js/Profiel.js"></script>
    <!--Add Addres Js File -->
    <script>
        $("#addaddres").submit(
            function() 
            {
                    $.ajax({
                        type: 'POST',
                        url: 'https://jiraapi.momentum-sol.com/api/add/address',
                        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
                        data: {
                            name: $("#name_addres").val(),
                            address: $("#address").val(),
                            floor_number: $("#floor").val(),
                            apartment_number: $("#apartment").val(),
                            area: $("#area").val(),
                            city: $("#city").val(),
                            phone:"01147372828",
                            default:1,
                            lat:12.222,
                            lng:12.22,
                            building_number:2
                        },
                        dataType: "json",
                        success: function(response) {
                        console.log("Success!");
                        window.location='address.php'
                        },
                        error: function(err) {
                        console.log(err);
                        }
                    })
                }
            )
    </script>
    
    
</body>

</html>
