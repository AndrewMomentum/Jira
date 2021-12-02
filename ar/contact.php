<?php include 'header.php';?>



    <!--==============================
    Breadcumb
============================== -->
    <div class="breadcumb-wrapper breadcumb-layout1 bg-fluid">
        <div class="overflow pt-200 pb-200">
            <div class="container">
                <div class="breadcumb-content text-center">
                    <h1 class="breadcumb-title">تواصل معنا</h1>
                    <ul class="breadcumb-menu-style1 mx-auto">
                        <li><a href="index.html">الرئيسيه</a></li>
                        <li class="active">تواصل معنا</li>
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
                        <h2 class="sec-title1">العنوان</h2>
                        <h3 class="sec-title2">معلومات</h3>
                        <img src="assets/img/icons/sec-icon-1.png" alt="Section Image">
                        <p class=" fs-md mt-4 pt-1">
في JiraMarket ، نعتقد أن مسؤوليتنا الأساسية هي العمل
                            أفضل سوبر ماركت ممكن حيث يكون التسوق والعمل دائمًا
                             من دواعي سروري وحيث يتم تزويد العميل دائمًا بفرح ،
                              تجربة مرضية ومثمرة.                        </p>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>القاهرة الجديدة</h4>
                            <p class="mb-0 fw-semibold">سوق جيرا</p>
                            <p class="mb-0 fw-semibold">268 شارع التسعين الشمالي</p>
                            <p class="mb-0 fw-semibold">ساعات العمل: 9 صباحًا - 2 صباحًا</p>
                            <p class="mb-0 fw-semibold">الهاتف: 15449</p>
                            <p class="mb-0 fw-semibold">info@jiramarket.com</p>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-30 mt-lg-0">
                    <div class="section-title mb-25">
                        <h2 class="sec-title1">ابقى على تواصل</h2>
                        <h3 class="sec-title2">ابلغنا</h3>
                        <img src="assets/img/icons/sec-icon-1.png" alt="Section Image">
                    </div>
                    <form action="mail.php" method="POST" class="contact-form contact-form1 mb-30">
                        <div class="row g-4">
                            <div class="col-12 form-group mb-0">
                                <input type="text" name="name" class="form-control" placeholder="اسمك">
                            </div>
                            <div class="col-lg-6 form-group mb-0">
                                <input type="text" name="email" class="form-control" placeholder="بريدك الالكتروني">
                            </div>
                            <div class="col-lg-6 form-group mb-0">
                                <input type="text" name="subject" class="form-control" placeholder="موضوعك">
                            </div>
                            <div class="col-12 form-group mb-0">
                                <textarea class="form-control" name="message" placeholder="رسالتك"></textarea>
                            </div>
                            <div class="col-12 form-group mb-0">
                                <button type="submit" class="vs-btn ">أرسل رسالة</button>
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
