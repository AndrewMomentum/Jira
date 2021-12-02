<?php include 'header.php';?>



    <!--==============================
    Breadcumb
============================== -->
    <div class="breadcumb-wrapper breadcumb-layout1 bg-fluid">
        <div class="overflow pt-200 pb-200">
            <div class="container">
                <div class="breadcumb-content text-center">
                    <h1 class="breadcumb-title">Contact Us</h1>
                    <ul class="breadcumb-menu-style1 mx-auto">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--==============================
      Contact Form Area
    ==============================-->
    <section class="vs-contact-wrapper vs-contact-layout1 space-top space-md-bottom">
        <div class="container">
            <div class="row text-center text-lg-start">
                <div class="col-lg-6 ">
                    <div class="section-title mb-25">
                        <h2 class="sec-title1">Address</h2>
                        <h3 class="sec-title2">Information</h3>
                        <img src="assets/img/icons/sec-icon-1.png" alt="Section Image">
                        <p class=" fs-md mt-4 pt-1">
                            At JiraMarket we believe our primary responsibility is to operate
                            the best supermarket possible where SHOPPING and WORKING are always
                             a pleasure and where the customer is always provided with joyful,
                              satisfying and fruitful experience.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>New Cairo</h4>
                            <p class="mb-0 fw-semibold">Jira Market</p>
                            <p class="mb-0 fw-semibold">268 Northern 90 St</p>
                            <p class="mb-0 fw-semibold">Opening hours: 9am- 02am</p>
                            <p class="mb-0 fw-semibold">Phone : 15449</p>
                            <p class="mb-0 fw-semibold">info@jiramarket.com</p>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30 mt-lg-0">
                    <div class="section-title mb-25">
                        <h2 class="sec-title1">Get In Touch</h2>
                        <h3 class="sec-title2">Inform Us</h3>
                        <img src="assets/img/icons/sec-icon-1.png" alt="Section Image">
                    </div>
                    <form action="mail.php" method="POST" class="contact-form contact-form1 mb-30">
                        <div class="row g-4">
                            <div class="col-12 form-group mb-0">
                                <input type="text" name="name" class="form-control" placeholder="Your Name">
                            </div>
                            <div class="col-lg-6 form-group mb-0">
                                <input type="text" name="email" class="form-control" placeholder="Your Email">
                            </div>
                            <div class="col-lg-6 form-group mb-0">
                                <input type="text" name="subject" class="form-control" placeholder="Your Subject">
                            </div>
                            <div class="col-12 form-group mb-0">
                                <textarea class="form-control" name="message" placeholder="Your Message"></textarea>
                            </div>
                            <div class="col-12 form-group mb-0">
                                <button type="submit" class="vs-btn ">Send Message</button>
                            </div>
                        </div>
                    </form>
                    <p class="form-messages mt-20 mb-0"></p>
                </div>
            </div>
        </div>
    </section>
   

    
    
<?php include 'footer.php';?>
</body>

</html>
