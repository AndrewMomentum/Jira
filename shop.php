<?php include 'header.php';?>

        <!--==============================
        Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper breadcumb-layout1 bg-fluid pt-200 pb-200" 
    id="imageslider_shop" data-bg-src="https://jiraapi.momentum-sol.com/images/Jira Categories/fruits-vegetables.webp">
        <div class="container">
            <div class="breadcumb-content text-center">
                <h1 class="breadcumb-title"></h1>
                <ul class="breadcumb-menu-style1 mx-auto">
                    <li><a href="index.php">Home</a></li>
                    <li class="active">Shop</li>
                </ul>
            </div>
        </div>
    </div>
    <!--==============================
    Feature Products
    ==============================-->
    <section class="vs-shop-wrapper position-relative space-top space-md-bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-9">
                    <div class="vs-sort-bar row justify-content-center justify-content-sm-between align-items-center pb-4 mb-1 ">
                        <div class="col-auto mb-3 mb-sm-0">
                            <div class="nav" role="tablist">
                                <a href="shop.php" class="icon-btn style3 active me-2" id="tab-shop-grid" data-bs-toggle="tab" data-bs-target="#tab-grid" role="tab" aria-controls="tab-grid" aria-selected="true"><i class="fas fa-th"></i></a>
                                <a href="shop-list.php" class="icon-btn style3  " id="tab-shop-list" data-bs-toggle="tab" data-bs-target="#tab-list" role="tab" aria-controls="tab-grid" aria-selected="false"><i class="far fa-bars"></i></a>
                            </div>
                        </div>
                        <div class="col d-none d-md-block">
                            <div class="border-top"></div>
                        </div>
<!--
                        <div class="col-sm-9 col-md-7 col-lg-8 col-xl-6">
                            <div class="row justify-content-center justify-content-sm-between">
                                <div class="col-auto d-flex align-items-center mb-3 mb-sm-0">
                                    <label class="text-body2" for="sortBy">Sort by</label>
                                    <select name="sortBy" id="sortBy" class="form-select">
                                        <option value="productName">Sorted Product Name</option>
                                        <option value="productName">Sorted Product New</option>
                                        <option value="productName">Sorted Product Popular</option>
                                    </select>
                                </div>
                                <div class="col-auto d-flex align-items-center">
                                    <label class="text-body2" for="showTotal">Show</label>
                                    <select name="showTotal" id="showTotal" class="form-select">
                                        <option value="productName">01</option>
                                        <option value="productName">02</option>
                                        <option value="productName">03</option>
                                        <option value="productName">04</option>
                                        <option value="productName">05</option>
                                    </select>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="tab-grid" role="tabpanel" aria-labelledby="tab-shop-grid">
                            <div class="row" id="Shopdataperntone">
                                
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-list" role="tabpanel" aria-labelledby="tab-shop-list">
                            <div class="row " id="Shopdatapernttwo">
                                
                            </div>
                        </div>
                    </div>
                    <div class="pagination-layout1 list-style-none mt-0 mt-lg-4 mb-30">
                        <!-- <ul>
                            <li><a href="#" class="active">1</a></li>
                            <li><a onclick="location.href='window.location.href'">Next</a></li>
                        </ul> -->
                    </div>
                </div>
                <div class="col-lg-4 col-xl-3">
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


</body>

</html>
    
