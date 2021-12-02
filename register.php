<?php include 'header.php';?>

<!--==============================
      Body Register Area
    ==============================-->
    <section class="vs-about-wrapper position-relative  space-top space-md-bottom">
            <div class="row  justify-content-center my-5" style="margin: 0">
                <div class="col-lg-4 col-md-6 col-sm-10" style="padding: 0">
                    <div class="form">
                        <form method="post" id="register" onsubmit="return false;">
                            <input type="hidden" name="_token" value="PyLEzYzeRTjmry3RHt5cGlyIloOm20ro0MAhShzG"> <div class="form-group">

                            <input class="form-control" name="first_name" id="first_name" type="text" placeholder="First Name" value="">
                            <p class="errorinput first_name-error"></p>

                            <input class="form-control" name="last_name" id="last_name" type="text" placeholder="Last Name" value="">
                            <p class="errorinput last_name-error"></p>

                            <input class="form-control" name="email" id="email" type="email" placeholder="Email" value="">
                            <p class="errorinput email-error"></p>

                            <input class="form-control" name="username" id="username" type="text" placeholder="Username" value="">
                            <p class="errorinput username-error"></p>

                            <input class="form-control" name="phone" id="phone" oninput="if (!window.__cfRLUnblockHandlers) return false;" 
                            type="number" maxlength="12" placeholder="Phone" id="phone_register" value="">
                            <p class="errorinput phone-error"></p>

                            <input class="form-control" name="password" id="password" type="password" placeholder="Password">
                            <p class="errorinput password-error"></p>

                            <input class="form-control" name="password_confirmation" id="password_confirmation" type="password" placeholder="Confirm Password">
                            </div>
                            <p class="errorinput password_confirmation_error"></p>

                            <div class="row mt-5" style="justify-content: center">
                            <button type="submit" class="btn qut-btn vs-btn shadow-none" style="width: 85%"> Register</button>
                            </div>
                        </form>
                        </div>
                        
                </div>
            </div>

    </section>
<?php include 'footer.php';?>
<script src="assets/js/register.js"></script>

</body>

</html>
