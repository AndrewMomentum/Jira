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
                            <a class="nav-link active" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="true">
                                <i class="fas fa-user"></i>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" id="addresses-tab" data-toggle="tab" href="address.php" role="tab" aria-controls="addresses" aria-selected="false">
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
                        <button type="button" class="btn" id="log_out">
                            logout
                        </button>
                    </ul>

                </div>
            </div>
                <div class="col-lg-8 col-md-6 col-sm-12 my-5">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h5>Personal Info</h5>
                            <hr>

                        <form class="w-100" action="" method="post" enctype="multipart/form-data" id="update" onsubmit="return false;" novalidate>
                            <input type="hidden" name="_token" value="PyLEzYzeRTjmry3RHt5cGlyIloOm20ro0MAhShzG"> <input type="hidden" name="_method" value="put"> 
                        <div class="form-row w-100" style="margin:0; display: block;">
                            <div class="col-5">

                            </div>

                            <div class="form-group col-11 col-lg-8 col-md-10 col-sm-8">
                                <input name="name" type="text" class="form-control"  placeholder="Name" id="name">
                                <p class="errorinput name-error"></p>
                            </div>
                            <div class="form-group col-11 col-lg-8 col-md-10 col-sm-8">
                                <input name="email" type="text" class="form-control" placeholder="Email" id="email">
                                <p class="errorinput email-error"></p>
                            </div>
                            <div class="form-group col-11 col-lg-8 col-md-10 col-sm-8">
                                <input name="phone" type="text" class="form-control" placeholder="Phone" id="phone" disabled>
                            </div>
                            <div class="form-group  col-5">
                            </div>
                            <div class="col-11 col-lg-5 col-md-10 col-sm-8">
                                <button type="submit" class="btn mt-5 mb-5 btn qut-btn vs-btn shadow-none"
                                style="background-color: #5abb45;"> Update</button>
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
</body>

</.php>
