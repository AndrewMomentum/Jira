<?php include 'header.php';?>

        <!--==============================
        Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper breadcumb-layout1 bg-fluid pt-200 pb-200" 
    id="imageslider_shop" data-bg-src="https://jiraapi.momentum-sol.com/images/Jira Categories/local-cheese.webp">
        <div class="container">
             <div class="breadcumb-content text-center">
                <h1 class="breadcumb-title"></h1>
                <ul class="breadcumb-menu-style1 mx-auto">
                    <li><a href="index.php">الرئيسيه</a></li>
                    <li class="active"><?php
                        if (isset($_GET['search'])) {
                            echo $_GET['search'];
                        } else {
                            echo"انت لم تقم بادخال كلمه بحث!";
                        } ?>
                        </li>
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
                <div class="col-lg-12 col-xl-12">
                    <div class="vs-sort-bar row justify-content-center justify-content-sm-between align-items-center pb-4 mb-1 ">
                        <div class="col-auto mb-3 mb-sm-0">
                            <div class="nav" role="tablist">
                                <a href="shop.php" class="icon-btn style3 active me-2" id="tab-shop-grid" data-bs-toggle="tab" data-bs-target="#tab-grid" role="tab" aria-controls="tab-grid" aria-selected="true"><i class="fas fa-th"></i></a>
                                <a href="shop-list.html" class="icon-btn style3  " id="tab-shop-list" data-bs-toggle="tab" data-bs-target="#tab-list" role="tab" aria-controls="tab-grid" aria-selected="false"><i class="far fa-bars"></i></a>
                            </div>
                        </div>
                        <div class="col d-none d-md-block">
                            <div class="border-top"></div>
                        </div>

</div>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="tab-grid" role="tabpanel" aria-labelledby="tab-shop-grid">
                            <div class="row" id="Shopdataperntone">
                                
                                <div class="nodataserah" style="display: none;">No Product Found at the moment please check later or give us a call!</div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tab-list" role="tabpanel" aria-labelledby="tab-shop-list">
                            <div class="row " id="Shopdatapernttwo">
                            </div>
                        </div>
                    </div>
                    <div class="pagination-layout1 list-style-none mt-0 mt-lg-4 mb-30">
                        <!-- <ul>
                            <li><a href="#">Prev</a></li>
                            <li><a href="#" class="active">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">Next</a></li>
                        </ul> -->
                        <div id="data-container"></div>
                        <div id="pagination-container"></div>
                       

                    </div>
                </div>
               <!-- <div class="col-lg-4 col-xl-3">
                    <aside class="sidebar-area">
                        <div class="widget widget_categories   ">
                            <h3 class="widget_title">Categories</h3>
                            <ul id="categorieslist">
                                
                               
                            </ul>
                        </div>
                        
                    </aside>
                </div> -->
            </div>
        </div>
    </section>
<?php include 'footer.php';?>
    <!--- Script Shoping Js File -->

</body>

</html>
    
