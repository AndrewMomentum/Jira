<?php include 'header.php';?>

    <!--==============================
    Breadcumb
============================== -->
    <div class="breadcumb-wrapper breadcumb-layout1 bg-fluid pt-200 pb-200">
        <div class="container">
            <div class="breadcumb-content text-center">
                <h1 class="breadcumb-title">الدفع</h1>
                <ul class="breadcumb-menu-style1 mx-auto">
                    <li><a href="index.php">الرئيسيه</a></li>
                    <li class="active">الدفع</li>
                </ul>
            </div>
        </div>
    </div>
    <!--==============================
    Checkout Arae
    ==============================-->
    <div class="vs-checkout-wrapper">
        <div class="container">
            <h4 class="mt-4 pt-lg-2">طلاباتك</h4>
            <form action="#" class="woocommerce-cart-form">
                <table class="cart_table mb-20">
                    <thead>
                        <tr>
                            <th class="cart-col-image">الصوره</th>
                            <th class="cart-col-productname">اسم المنتج</th>
                            <th class="cart-col-price">السعر</th>
                            <th class="cart-col-quantity">القميه</th>
                            <th class="cart-col-total">الاجمالي</th>
                        </tr>
                    </thead>
                    <tbody id="cart_itemcheckout">
                       
                    </tbody>
                </table>
            </form>
            <div class="border ps-2 py-2 border-light">
                <div class="row  justify-content-lg-end">
                    <div class="col-md-8 col-lg-6 col-xl-4">
                        <table class="checkout-ordertable mb-0">
                            <tbody>
                                <tr class="cart-subtotal">
                                    <th>مجموع سلة التسوق</th>
                                    <td>
                                        <span class="amount" id="amount_checkout">
                                            
                                        </span>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="pt-10 pt-lg-5 mb-30">
                <div class="woocommerce-checkout-payment">
                   
                    <div class="form-row place-order">
                        <button type="submit" id="myBtn" class="vs-btn">متابعة عمليه الشراء</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>تم إنشاء الطلب بنجاح</h2>
    </div>
    <div class="modal-body">
      <p>سوف نتحقق من صحة طلبك ونتواصل معك في أسرع وقت ممكن</p>
      <p>في غضون ذلك ، يمكنك متابعة طلبك من علامة التبويب طلباتي</p>
    </div>
    <div class="modal-footer">
      <h3 style="text-align:right;">فريق سوق جيرا</h3>
    </div>
  </div>

</div>

<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>

<?php include 'footer.php';?>

</body>

</html>
