<?php include 'header.php';?>
    <!--==============================
      Body login Area
    ==============================-->
    <section class="vs-about-wrapper position-relative  space-top space-md-bottom">
            <div class="row  justify-content-center my-5" style="margin: 0">
                <div class="col-lg-4 col-md-6 col-sm-10" style="padding: 0">
                    <div class="form">
                        <div class="formgroup">
                            <form action="" method="post" id="myForm" onsubmit="return false;">
                                <input type="hidden" name="_token" value="">
                                <div class="form-group">
                                    <input class="form-control" name="email" type="text" placeholder="Phone" style="margin-bottom: 8px" id="phone">
                                    <p class="errorinput phone-error"></p>
                                    <input class="form-control" name="password" type="password" placeholder="Password" id="password">
                                    <p class="errorinput password-error"></p>
                                    <a href="" class="forget_pss float-right mt-2" style="font-size: 14px">Forgot Password</a>
                                </div>
                                <p class="errorinput message-error"></p>
                                    <div class="row" style="justify-content: center;margin:0">
                                    <button type="submit" class="btn qut-btn vs-btn shadow-none " style="width: 85%"> Login</button>
                                </div>
                            </form>
                            <hr>
                            <div class="create_new_account">
                             <span>New to Jira?</span> <a style="color: blue;text-decoration:underline" href="register.php"> Create Account</a>
                            </div>
                            <p class="mt-2" style="line-height: 1.5;">By Login or Register, I agree to Jira’s <a style="color: blue;text-decoration:underline" href="https://Jirastores.com/en/return_policy">Refund &amp; Returns Policy</a> and <a style="color: blue;text-decoration:underline" href="https://Jirastores.com/en/privacy_policy">Privacy Policy </a>.</p>        

                        </div>
                    </div>
                </div>
            </div>

    </section>
<?php include 'footer.php';?>
    <!-- Over Main Js File -->
    <script src="assets/js/Overmain.js"></script>
</body>

</html>
