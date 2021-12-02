
function GetDatacategories (){
    const Arraymenudata = [];
    $.ajax({
        url: "https://jiraapi.momentum-sol.com/api/categories?lang=ar",
        async: true,
        type: 'GET',
        error: function(err){console.log(err)},
         success: function(reusalte){
            Arraymenudata.push(...reusalte.data)
            // Push Data for function Create The Navbar
            Createdatamenu(Arraymenudata)
            // Push Data for function Create The Navbar Mobile
            Createmeanuemobile(Arraymenudata)
            // Push Data for function Create The Button Feature Fillter
            CreatebuttonFeature(Arraymenudata)
            // Push Data for function Create The Element Feature Fillter
            CreateelmentFeature(Arraymenudata)
            // Push Data Create Categories by list lift
            Categorieslist(Arraymenudata)
        },
    });

 
    // Hide && Show Data Login in Navbar
    const token = localStorage.getItem('token');
    if(token){
        $(".linklogin").append(`
        <div class="d-flex justify-content-around links_login"  id="links_login">
            <a href="profile.php" class="bg4 cart-btn"><i class="fal fa-user"></i> </a>
            <a href="#" class="bg4 cart-btn">
                <i class="fal fa-heart"></i><span id="wishlist-count" class="badge wishlist-total-count"></span>
            </a>
            <a href="#" class="bg4 cart-btn sideMenuToggler">
                <i class="fal fa-shopping-cart"></i><span class="badge" id="cartlength"></span>
            </a>
        </div>
        `)}else{
            $(".linklogin").append(`<div class="ms-4 head-top-links text-body2 fw-semibold" id="links_logout">
                        <span class="icon-btn bg4"><i class="fal fa-user"></i></span>
                        <ul>
                            <li><a href="login.php" id="login">تسجيل دجول</a></li>
                            <li><a href="register.php" id="register">تسجيل جديد</a></li>
                        </ul>
                </div>`)}
}
 
GetDatacategories();
/* ==============================
   Create The Navbar Data 
    ============================== */

    /* ======= Create Data For Meanu Navbar ======= */

function Createdatamenu(Arraydata){
    Arraydata.map(item=>
        $(".data_menu_categgories").append(`<li class=${item.children.length == 0? "flaticon-lemon" :"menu-item-has-children"}>
            <a href="shop.php?${item.id}" onclick="Getshopdata(${item.id})">${item.name_en}</a>
                    <ul class="mega-menu-wrap">
                            <li>
                                <div class="box-nav-popup" data-bg-src="assets/img/bg/nav-bg-1.png" onerror="this.src='assets/img/shop/Jira-openning-screen.png'">
                                    <div class="row gx-80 justify-content-between">
                                        <div class="col-md-6 col-lg-auto ">
                                            <div class="widget widget_nav_menu">
                                                <div class="vs-box-nav">
                                                    <ul>${item.children.map(item=>CreatedataChildrn(item))}</ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                     </ul>
        </li>`))}



/* ===== Create Childrn Data For Meanu Navbar ====== */

function CreatedataChildrn(date){
    if(date.children.length == 0 ){
        return `<li><a href="shop.php?${date.id}">${date.name_ar}</a></li>`
    }else{return `<li class="menu-item-has-children">
        <a href="shop.php?${date.id}" onclick="Getshopdata(${date.id})">${date.name_ar}</a>
            <ul class="mega-menu-wrap">
               <li>
                    <div class="box-nav-popup" data-bg-src="assets/img/bg/nav-bg-1.png">
                        <div class="row gx-80 justify-content-between">
                            <div class="col-md-6 col-lg-auto ">
                                <div class="widget widget_nav_menu">
                                    <div class="vs-box-nav">
                                        <ul>${date.children.map(item=>`<li>
                                            <a href="shop.php?${item.id}"  onclick="Getshopdata(${item.id})">${item.name_en}</a>
                                        </li>`)}
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
    </li>`}
}

/* ===== Create Data For Meanu Navbar Mobile ====== */

 function Createmeanuemobile(Arraydata){
    $(".mobile_menuelist").append(
        Arraydata.map(item=>item.children.length != 0 ?
             `<li class="accordion">
        <a href="shop.php?${item.id}">${item.name_ar}</a>
        </li> 
        <ul class="mobile_menuelist">
        </ul>` :  
        `<li>
        <a href="shop.php?${item.id}">${item.name_ar}</a>
        </li>`)
        )}




/*
function Createmeanuemobile(Arraydata){
    $(".mobile_menuelist").append(
        Arraydata.map(item=>item.children.length != 0 ?
             `<li class="accordion">
        <a href="#">${item.name_en}</a>
        </li> 
        <ul class="mobile_menuelist">
        ${item.children.map(item=>CreatedatamobileChildren(item))}
        </ul>` :  
        `<li>
        <a href="#">${item.name_en}</a>
        </li>`)
        )}


function CreatedatamobileChildren(Arraydata){
    console.log(Arraydata);
}
*/
var butnheding = document.getElementsByClassName('accordion');
var i;
for (i=0 ; i < butnheding.length ; i++){ 
    butnheding[i].addEventListener('click',
    function(){this.classList.toggle('active');
var nextelmentlist = this.nextElementSibling;       
if(nextelmentlist.style.maxHeight){
    nextelmentlist.style.maxHeight=null;}
    else{nextelmentlist.style.maxHeight=nextelmentlist.scrollHeight + "px";}
    });
}
/* ==============================
   Create Feature Products
    ============================== */

/* ========= 
    Create Feature Products Button
    ========= */

    function CreatebuttonFeature(Arraydatproducts){
        $("#feature_products_button").append(`
                <button class="active" data-easyfilter="*" data-bg-src="assets/img/shape/shape-filter.png">
                    <i class="flaticon-salad"></i>
                اظهار الكل
                </button>
                ${Arraydatproducts.map(item=>`
                <button data-easyfilter="${item.id}" data-bg-src="assets/img/shape/shape-filter.png">
                            <i class="flaticon-salad-1"></i> ${item.name_en}
                </button>`)}`)}

/* ========= 
    Create Feature Products Elment
    ========= */

    function CreateelmentFeature(Arraydatproducts){
        const ArrayData=[]
        Arraydatproducts.map(item=>ArrayData.push(...item.children))
        
        $("#filter-active").append(ArrayData.slice(0,6).map(item=>`
        <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 grid-item" data-easyitem="filter${item.parent}">
                        <div class="vs-product-box2 thumb_swap d-lg-flex has-border">
                            <div class="product-img">
                                <a href="shop.php?${item.id}"><img src="https://jiraweb.momentum-sol.com/assets/img/shop/Jira-openning-screen.png" alt="Product Image" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" class="w-100"></a>
                                <a href="shop.php?${item.id}"><img src="https://jiraweb.momentum-sol.com/assets/img/shop/Jira-openning-screen.png" alt="Product Image" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" class="w-100 img_swap"></a>
                            </div>
                            <div class="product-content d-lg-flex align-items-center">
                                <div>
                                    <h4 class="product-title h5 mb-1"><a href="shop.php?${item.id}">${item.name_en}</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>`
                    ))}
/* =========
 Get Data Proudect Shoping By Api Link Categories
 =========*/
 function Getshopdata(Arraydataid){
    const dataid=Arraydataid;
}

/* ===========
Create Categories by list lift
=========== */
function Categorieslist(Arraydatas){
     $("#categorieslist").append(Arraydatas.map(item=>`<li>
            <a href="shop.php?${item.id}" >${item.name_en}</a>
            <span>${item.children.length}</span>
        </li> `)
        )}

/* ============
Home Padge Slider
============= */
function Sliderhomepage(){
    $.ajax({
        url: "https://jiraapi.momentum-sol.com/api/image_sliders",
        async: false,
        type: 'GET',
        error: function(err){console.log(err)},
         success: function(reusalte){
            $("#images_slider").append(reusalte.data.map(item=>`
                    <div class="ls-slide" data-ls="duration: 8000; transition2d: 5; kenburnszoom:out; kenburnsscale:1.1;">
                        <img src=${item.image_url} alt="Hero Image" onerror="this.src='assets/img/shop/Jira-openning-screen.png'"  class="ls-bg">
                    </div>`)
                )
    }
})
}
Sliderhomepage();

  /*---------- 07. Popup Sidemenu ----------*/
  function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
    // Sidebar Popup
    $($sideMunuOpen).on('click', function (e) {
      e.preventDefault();
      $($sideMenu).addClass($toggleCls);
    });
    $($sideMenu).on('click', function (e) {
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls)
    });
    var sideMenuChild = $sideMenu + ' > div';
    $(sideMenuChild).on('click', function (e) {
      e.stopPropagation();
      $($sideMenu).addClass($toggleCls)
    });
    $($sideMenuCls).on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls);
    });
  };
  popupSideMenu('.sidemenu-wrapper', '.sideMenuToggler', '.sideMenuCls', 'show');

/* ============
Cart Data 
============= */

function cartdata(){
    $.ajax({
        url: "https://jiraapi.momentum-sol.com/api/get/cart?lang=ar",
        async: true,
        type: 'GET',
        // Fetch the stored token from localStorage and set in the header
        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
        error: function(err){console.log(err)},
         success: function(reusalte){
            Cartpope(reusalte.data)
            Cartpadge(reusalte.data)
            
    }
})
}
cartdata();
/* ========= 
    Create Cart Products Elment
    ========= */

function Cartpope(ArrayData){
    const totleamount = [];
    $("#cart_list").append(ArrayData.map(item => `
    <li class="mini_cart_item">
    <a href="#" class="remove"><i class="fal fa-trash-alt"></i></a>
    <a href="#"><img src="${item.image}" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Cart Image">${item.name}</a>
    <span class="quantity">${item.qty} ×
        <span class="amount"><span> ${item.price} </span>ج.م.</span>
    </span>
</li>`))
ArrayData.map(item =>totleamount.push(item.qty*item.price))

$("#cartlength").text(ArrayData.length)
getrr(totleamount)
}


function getrr(totleamount){
    let sum = 0;
    for (let i = 0; i < totleamount.length; i++) {
        sum += totleamount[i];
    }

         sum = sum.toFixed(2);
    $("#amount").append(`<span> EGP </span>${sum}`)
    $("#amount_padge").append(`<bdi><span> ج.م. </span>${sum}</bdi>`)
    $("#amount_checkout").append(`<bdi><span> ج.م. </span>${sum}</bdi>`)
}



function Cartpadge(ArrayData){
    var Qtynumberdata =new Datacartitems(ArrayData);
    
    if(ArrayData.length == 0){
        return null
    }else{
        $("#carttable").append(Qtynumberdata.Datacart()),
        $("#cart_itemcheckout").append(Qtynumberdata.Datacheckout())
    }

}


class Datacartitems{
    constructor(Arraycartelment){
        this.Arraycartelment = Arraycartelment;
        this.qtynumber;
    }
    Increse(){
        return this.qtynumber+1
    }
    Datacart(){
        return (`<table class="cart_table">
                    <thead>
                        <tr>
                            <th class="cart-col-image"> الصوره</th>
                            <th class="cart-col-productname">اسم المنتج</th>
                            <th class="cart-col-price">السعر</th>
                            <th class="cart-col-quantity">القميه</th>
                            <th class="cart-col-total">الاجمالي</th>
                            <th class="cart-col-remove">ازاله</th>
                        </tr>
                    </thead>
                    <tbody>${this.Arraycartelment.map(item=>(`<tr class="cart_item">
                        <td data-title="Product">
                            <a class="cart-productimage" href="#"><img width="91" height="91" src="${item.image}" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" " alt="Image"></a>
                        </td>
                        <td data-title="Name">
                            <a class="cart-productname" href="#">${item.name}</a>
                        </td>
                        <td data-title="Price">
                            <span class="amount"><bdi><span> ج.م. </span>${item.price}</bdi></span>
                        </td>
                        <td data-title="Quantity">
                            <div class="quantity">
                                <button class="quantity-minus qut-btn" onclick="Decrese(${item.id}); return false;">
                                    <i class="far fa-minus"></i>
                                </button>
                                <input type="number" class="qty-input" value=${this.qtynumber= item.qty} min="1" max="99">
                                <button class="quantity-plus qut-btn" type="button" onclick=${this.Increse} ; return false;">
                                    <i class="far fa-plus"></i>
                                </button>
                            </div>
                        </td>
                        <td data-title="Total">
                            <span class="amount"><bdi><span>ج.م.</span>${item.qty * item.price}</bdi></span>
                        </td>
                        <td data-title="Remove">
                            <a href="#" class="remove"><i class="fal fa-trash-alt"></i></a>
                        </td>
                    </tr>`))}</tbody>
                </table>`)}
    Datacheckout(){
        return (this.Arraycartelment.map(item=>` <tr class="cart_item">
        <td data-title="Product">
            <a class="cart-productimage" href="#"><img width="91" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" height="91" src="${item.image}" alt="Image"></a>
        </td>
        <td data-title="Name">
            <a class="cart-productname" href="#">${item.name}</a>
        </td>
        <td data-title="Price">
            <span class="amount"><bdi><span>  ج.م. </span>${item.price}</bdi></span>
        </td>
        <td data-title="Quantity">
            <strong class="product-quantity">${item.qty}</strong>
        </td>
        <td data-title="Total">
            <span class="amount"><bdi><span> ج.م. </span>${item.price * item.qty}</bdi></span>
        </td>
    </tr>`))
    }
}

/* ======
Shiping 
=======*/
