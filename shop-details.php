<?php include 'header.php';?>

<!--==============================
    Breadcumb
============================== -->
    <div class="breadcumb-wrapper breadcumb-layout1 bg-fluid pt-200 pb-200" id="bakgroundcatggros">
        <div class="container">
            <div class="breadcumb-content text-center">
                <h1 class="breadcumb-title" id="breadcumb-title"></h1>
                <ul class="breadcumb-menu-style1 mx-auto">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Shop</li>
                </ul>
            </div>
        </div>
    </div>
    <!--==============================
    Shop Details
    ==============================-->
    <section class="vs-shop-wrapper shop-details space-top space-md-bottom">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-6 col-xl-5 mb-30 mb-md-0">
                    <div class="product-big-img vs-carousel" data-slide-show="1" data-lg-slide-show="1" data-md-slide-show="1" data-sm-slide-show="1" data-fade="true" data-dots="true" data-asnavfor="#thumbproductimg" id="bigproductimg">
                        
                    </div>
                    
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="product-content">
                        <h3 class="product-title mb-1" id="proudect_title"></h3>
                        <span class="price font-theme">
                            <strong id="proudect_price"></strong>
                        </span>
                        <p class="fs-xs my-4" id="proudect_description"></p>
                        <div class="mt-2 link-inherit fs-xs">
                            <p><strong class="text-title me-3 font-theme">Availability :</strong><a href="#"><i class="far fa-check-square me-2 ms-1"></i>In Stock</a></p>
                        </div>
                        <div class="actions mb-4 pb-2">
                            <div class="quantity style2 me-4">

                                <input type="number" class="qty-input" value="1" min="1" max="99">
                                <button class="quantity-minus qut-btn"><i class="far fa-chevron-down"></i></button>
                                <button class="quantity-plus qut-btn"><i class="far fa-chevron-up"></i></button>
                            </div>
                            <button class="vs-btn shadow-none" id="add_cart">Add To Cart</button>
                        </div>
                        <div class="product_meta">
                            <span class="posted_in">Category: <a href="#" rel="tag" id="proudect_category"></a></span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 d-none d-xl-block">

                    <aside class="sidebar-area">
                        <div class="widget widget_categories   ">
                            <h3 class="widget_title">Categories</h3>
                            <ul id="categorieslist">
                                
                               
                            </ul>
                        </div>
                        
                    </aside>
                </div>
            </div>
            
        </div>
    </section>
<?php include 'footer.php';?>


    <!--- Script Shoping Js File -->
    <script src="assets/js/Shopdetails.js" type="module"></script>
</body>

</html>
