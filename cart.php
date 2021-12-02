<?php include 'header.php';?>

     <!--==============================
    Breadcumb
============================== -->
<div class="breadcumb-wrapper breadcumb-layout1 bg-fluid">
    <div class="overflow pt-200 pb-200">
        <div class="container">
            <div class="breadcumb-content text-center">
                <h1 class="breadcumb-title"> Cart</h1>
                <ul class="breadcumb-menu-style1 mx-auto">
                    <li><a href="index.php">Home</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    <!--==============================
    Cart Area
    ==============================-->
    <div class="vs-cart-wrapper  space-top space-md-bottom">
        <div class="container">
            <form action="#" class="woocommerce-cart-form" id="carttable">
                
            </form>
            <div class="row justify-content-end">
                <div class="col-md-8 col-lg-7 col-xl-6">
                    <h2 class="h4 summary-title">  Cart Totals</h2>
                    <table class="cart_totals">
                        <tbody>
                            <tr>
                                <td> Cart Subtotal  </td>
                                <td data-title="Cart Subtotal">
                                    <span class="amount" id="amount_padge"></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4 col-lg-5 col-xl-6 wc-proceed-to-checkout mt-30">
                    <a href="checkout.php" class="vs-btn rounded-1 shadow-none">  Proceed to Checkout </a>
                </div>
            </div>
        </div>
    </div>
<?php include 'footer.php';?>


</body>

</html>
