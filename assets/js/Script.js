
function GetDatacategories (){
    const Arraymenudata = [];
    $.ajax({
        url: "https://jiraapi.momentum-sol.com/api/categories?lang=en",
        async: true,
        type: 'GET',
        error: function(err){console.log(err)},
         success: function(reusalte){
            Arraymenudata.push(...reusalte.data)
            // Push Data for function Create The Navbar
            Createdatamenu(Arraymenudata)
            // Push Data for function Create The Element Feature Fillter
            CreateelmentFeature(Arraymenudata)
            // Push Data Create Categories by list lift
            Categorieslist(Arraymenudata)
            // Push Data Create Data from Menue Navbar Mobuile
            Createmobuilemenue(Arraymenudata)
        },
    });

 
    // Hide && Show Data Login in Navbar
    const token = localStorage.getItem('token');
    if(token){
        $(".linklogin").append(`
        <div class="d-flex justify-content-around links_login"  id="links_login">
            <a href="profile.php" class="bg4 cart-btn"><i class="fal fa-user"></i> </a>
            <a href="wishlist.php" class="bg4 cart-btn">
                <i class="fal fa-heart"></i>
                <span class="badge wishlist-total-count wishlist-count"></span>
            </a>
            <a href="#" class="bg4 cart-btn sideMenuToggler">
                <i class="fal fa-shopping-cart"></i><span class="badge cartlength"></span>
            </a>
        </div>
        `)}else{
            $(".linklogin").append(`<div class="ms-4 head-top-links text-body2 fw-semibold" id="links_logout">
                        <span class="icon-btn bg4"><i class="fal fa-user"></i></span>
                        <ul>
                            <li><a href="login.php" id="login">Login</a></li>
                            <li><a href="register.php" id="register">Register</a></li>
                        </ul>
                </div>`)}
}
 
GetDatacategories();
/* ==============================
   Create The Navbar Data 
    ============================== */
/* ===========
    Create Data For Menu Navbar Mobuile 
    ============== */

$('#menu-item-has-children').click(function() {
    $('#sub_menutwo').toggole();
  });
  function Createmobuilemenue(ArrayData){
    ArrayData[0].children.map(item=> $("#categories_itemsone").append(`<li>
    <a href="shop.php?${item.id}&paginate=9&page=1">${item.name_en}</a>
    </li>
    `))
    ArrayData[1].children.map(item=> $("#categories_itemstwo").append(`<li>
    <a href="shop.php?${item.id}&paginate=9&page=1">${item.name_en}</a>
    </li>
    `))
    ArrayData[2].children.map(item=> $("#categories_itemthree").append(`<li>
    <a href="shop.php?${item.id}&paginate=9&page=1">${item.name_en}</a>
    </li>
    `))
  } 

  
  /*
  $("#show").click(function(){
    $(".categories_itemsone").show();
  });

    $("#sub_menutwo")append(`<li class="menu-item-has-children vs-item-has-children">
                                <span class="vs-mean-expand">Categories</span>
                                <ul class="sub-menu vs-submenu" style="display: none;" id="categories_items">
                                        <li><a href="shop.php?${dataitem.id}&paginate=9&page=1">${dataitem.name_en}</a></li>`
                                </ul>
                            </li>`)

<li id="menu-item-has-children">
            <span class="vs-mean-expand">${item.name_en}</span>
                <ul class="sub-menu vs-submenu" style="display: none;" id="sub_menutwo">
                        ${item.children.map(dataitem=>
                            `
                        )}
                </ul>
    </li>
  */
    /* ======= Create Data For Meanu Navbar ======= */

function Createdatamenu(Arraydata){
    Arraydata.map(item=>
        $(".data_menu_categgories").append(`<li class=${item.children.length == 0? "flaticon-lemon" :"menu-item-has-children"}>
            <a href="shop.php?${item.id}&paginate=9&page=1" onclick="Getshopdata(${item.id})">${item.name_en}</a>
                    <ul class="mega-menu-wrap">
                            <li>
                                <div class="box-nav-popup" data-bg-src="assets/img/bg/nav-bg-1.png">
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
        return `<li><a href="shop.php?${date.id}&paginate=9&page=1">${date.name_en}</a></li>`
    }else{return `<li class="menu-item-has-children">
        <a href="shop.php?${date.id}&paginate=9&page=1" onclick="Getshopdata(${date.id})">${date.name_en}</a>
            <ul class="mega-menu-wrap">
               <li>
                    <div class="box-nav-popup" data-bg-src="assets/img/bg/nav-bg-1.png">
                        <div class="row gx-80 justify-content-between">
                            <div class="col-md-6 col-lg-auto ">
                                <div class="widget widget_nav_menu">
                                    <div class="vs-box-nav">
                                        <ul>${date.children.map(item=>`<li>
                                            <a href="shop.php?${item.id}&paginate=9&page=1" onclick="Getshopdata(${item.id})">${item.name_en}</a>
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

 
 

/* ==============================
   Create Feature Products
    ============================== */



    function CreateelmentFeature(Arraydatproducts){
        
        $("#freshfoodI").append(`<div class="vs-product-box2 thumb_swap  d-lg-flex has-border">
                        <div class="product-img">
                            <a href="shop.php?${Arraydatproducts[0].children[0].id}&paginate=9&page=1">
                            <img src="${Arraydatproducts[0].children[0].image}"
                              onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                            class="w-100"></a>
                            <a href="shop.php?${Arraydatproducts[0].children[0].id}&paginate=9&page=1">
                            <img src="${Arraydatproducts[0].children[0].image}"
                              onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                              class="w-100 img_swap"></a>
                        </div>
                        <div class="product-content d-lg-flex align-items-center">
                            <div>
                                <h4 class="product-title h5 mb-1"><a href="shop.php?${Arraydatproducts[0].children[0].id}&paginate=9&page=1">
                                ${Arraydatproducts[0].children[0].name_en}
                                </a></h4>
                            </div>
                        </div>
            </div>`)
        $("#freshfoodII").append(`<div class="vs-product-box2 thumb_swap  d-lg-flex has-border">
                        <div class="product-img">
                            <a  href="shop.php?${Arraydatproducts[0].children[2].id}&paginate=9&page=1">
                            <img src="${Arraydatproducts[0].children[2].image}"
                              onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                            class="w-100"></a>
                            <a  href="shop.php?${Arraydatproducts[0].children[2].id}&paginate=9&page=1">
                            <img src="${Arraydatproducts[0].children[2].image}"
                              onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                              class="w-100 img_swap"></a>
                        </div>
                        <div class="product-content d-lg-flex align-items-center">
                            <div>
                                <h4 class="product-title h5 mb-1"><a  href="shop.php?${Arraydatproducts[0].children[2].id}&paginate=9&page=1">
                                ${Arraydatproducts[0].children[2].name_en}
                                </a></h4>
                            </div>
                        </div>
            </div>`)
        $("#freshfoodIII").append(`<div class="vs-product-box2 thumb_swap  d-lg-flex has-border">
                        <div class="product-img">
                            <a  href="shop.php?${Arraydatproducts[0].children[3].id}&paginate=9&page=1">
                            <img src="${Arraydatproducts[0].children[3].image}"
                              onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                            class="w-100"></a>
                            <a  href="shop.php?${Arraydatproducts[0].children[3].id}&paginate=9&page=1">
                            <img src="${Arraydatproducts[0].children[3].image}"
                              onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                              class="w-100 img_swap"></a>
                        </div>
                        <div class="product-content d-lg-flex align-items-center">
                            <div>
                                <h4 class="product-title h5 mb-1"><a  href="shop.php?${Arraydatproducts[0].children[3].id}&paginate=9&page=1">
                                ${Arraydatproducts[0].children[3].name_en}
                                </a></h4>
                            </div>
                        </div>
            </div>`)
        $("#croceryI").append(`<div class="vs-product-box2 thumb_swap  d-lg-flex has-border">
                    <div class="product-img">
                        <a  href="shop.php?${Arraydatproducts[1].children[0].id}&paginate=9&page=1">
                        <img src="${Arraydatproducts[1].children[0].image}"
                          onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                        class="w-100"></a>
                        <a  href="shop.php?${Arraydatproducts[1].children[0].id}&paginate=9&page=1">
                        <img src="${Arraydatproducts[1].children[0].image}"
                          onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                          class="w-100 img_swap"></a>
                    </div>
                    <div class="product-content d-lg-flex align-items-center">
                        <div>
                            <h4 class="product-title h5 mb-1"><a  href="shop.php?${Arraydatproducts[1].children[0].id}&paginate=9&page=1">
                            ${Arraydatproducts[1].children[0].name_en}
                            </a></h4>
                        </div>
                    </div>
        </div>`)
        $("#croceryII").append(`<div class="vs-product-box2 thumb_swap  d-lg-flex has-border">
                <div class="product-img">
                    <a  href="shop.php?${Arraydatproducts[1].children[1].id}&paginate=9&page=1">
                    <img src="${Arraydatproducts[1].children[1].image}"
                      onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                    class="w-100"></a>
                    <a  href="shop.php?${Arraydatproducts[1].children[1].id}&paginate=9&page=1">
                    <img src="${Arraydatproducts[1].children[1].image}"
                      onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                      class="w-100 img_swap"></a>
                </div>
                <div class="product-content d-lg-flex align-items-center">
                    <div>
                        <h4 class="product-title h5 mb-1"><a  href="shop.php?${Arraydatproducts[1].children[1].id}&paginate=9&page=1">
                        ${Arraydatproducts[1].children[1].name_en}
                        </a></h4>
                    </div>
                </div>
    </div>`)
    $("#croceryIII").append(`<div class="vs-product-box2 thumb_swap  d-lg-flex has-border">
            <div class="product-img">
                <a  href="shop.php?${Arraydatproducts[1].children[2].id}&paginate=9&page=1">
                <img src="${Arraydatproducts[1].children[2].image}"
                  onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                class="w-100"></a>
                <a  href="shop.php?${Arraydatproducts[1].children[2].id}&paginate=9&page=1">
                <img src="${Arraydatproducts[1].children[2].image}"
                  onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                  class="w-100 img_swap"></a>
            </div>
            <div class="product-content d-lg-flex align-items-center">
                <div>
                    <h4 class="product-title h5 mb-1"><a  href="shop.php?${Arraydatproducts[1].children[2].id}&paginate=9&page=1">
                    ${Arraydatproducts[1].children[2].name_en}
                    </a></h4>
                </div>
            </div>
    </div>`)
    $("#nonfoodI").append(`<div class="vs-product-box2 thumb_swap  d-lg-flex has-border">
            <div class="product-img">
                <a  href="shop.php?${Arraydatproducts[2].children[0].id}&paginate=9&page=1">
                <img src="${Arraydatproducts[2].children[0].image}"
                  onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                class="w-100"></a>
                <a  href="shop.php?${Arraydatproducts[2].children[0].id}&paginate=9&page=1">
                <img src="${Arraydatproducts[2].children[0].image}"
                  onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                  class="w-100 img_swap"></a>
            </div>
            <div class="product-content d-lg-flex align-items-center">
                <div>
                    <h4 class="product-title h5 mb-1"><a  href="shop.php?${Arraydatproducts[2].children[0].id}&paginate=9&page=1">
                    ${Arraydatproducts[2].children[0].name_en}
                    </a></h4>
                </div>
            </div>
    </div>`)
    $("#nonfoodII").append(`<div class="vs-product-box2 thumb_swap  d-lg-flex has-border">
            <div class="product-img">
                <a  href="shop.php?${Arraydatproducts[2].children[1].id}&paginate=9&page=1">
                <img src="${Arraydatproducts[2].children[1].image}"
                  onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                class="w-100"></a>
                <a  href="shop.php?${Arraydatproducts[2].children[1].id}&paginate=9&page=1">
                <img src="${Arraydatproducts[2].children[1].image}"
                  onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
                  class="w-100 img_swap"></a>
            </div>
            <div class="product-content d-lg-flex align-items-center">
                <div>
                    <h4 class="product-title h5 mb-1"><a  href="shop.php?${Arraydatproducts[2].children[1].id}&paginate=9&page=1">
                    ${Arraydatproducts[2].children[1].name_en}
                    </a></h4>
                </div>
            </div>
    </div>`)
    $("#nonfoodIII").append(`<div class="vs-product-box2 thumb_swap  d-lg-flex has-border">
        <div class="product-img">
            <a  href="shop.php?${Arraydatproducts[2].children[3].id}&paginate=9&page=1">
            <img src="${Arraydatproducts[2].children[3].image}&paginate=9&page=1"
              onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
            class="w-100"></a>
            <a  href="shop.php?${Arraydatproducts[2].children[3].id}&paginate=9&page=1">
            <img src="${Arraydatproducts[2].children[3].image}"
              onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" 
              class="w-100 img_swap"></a>
        </div>
        <div class="product-content d-lg-flex align-items-center">
            <div>
                <h4 class="product-title h5 mb-1"><a  href="shop.php?${Arraydatproducts[2].children[3].id}&paginate=9&page=1">
                ${Arraydatproducts[2].children[3].name_en}
                </a></h4>
            </div>
        </div>
    </div>`)
    }

    /*

    */
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
            <a href="shop.php?${item.id}&paginate=9&page=1" >${item.name_en}</a>
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
                        <img src=${item.image_url} alt="Hero Image" class="ls-bg">
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
        url: "https://jiraapi.momentum-sol.com/api/get/cart?lang=en",
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
    <a href="#"><img src="${item.image}"  onerror="this.src='assets/img/shop/Jira-openning-screen.png'"  alt="Cart Image">${item.name}</a>
    <span class="quantity">${item.qty} ×
        <span class="amount"><span> ${item.price} </span> EGP</span>
    </span>
</li>`))
ArrayData.map(item =>totleamount.push(item.qty*item.price))

$(".cartlength").text(ArrayData.length)
getrr(totleamount)
}


function getrr(totleamount){
    let sum = 0;
    for (let i = 0; i < totleamount.length; i++) {
        sum += totleamount[i];
    }
    $("#amount").append(`<span> EGP </span>${sum}`)
    $("#amount_padge").append(`<bdi><span> EGP </span>${sum}</bdi>`)
    $("#amount_checkout").append(`<bdi><span> EGP </span>${sum}</bdi>`)
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
                            <th class="cart-col-image">Image</th>
                            <th class="cart-col-productname">Product Name</th>
                            <th class="cart-col-price">Price</th>
                            <th class="cart-col-quantity">Quantity</th>
                            <th class="cart-col-total">Total</th>
                            <th class="cart-col-remove">Remove</th>
                        </tr>
                    </thead>
                    <tbody>${this.Arraycartelment.map(item=>(`<tr class="cart_item">
                        <td data-title="Product">
                            <a class="cart-productimage" href="#"><img width="91" height="91" src="${item.image}" 
                            onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Image"></a>
                        </td>
                        <td data-title="Name">
                            <a class="cart-productname" href="#">${item.name}</a>
                        </td>
                        <td data-title="Price">
                            <span class="amount"><bdi><span> EGP </span>${item.price}</bdi></span>
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
                            <span class="amount"><bdi><span>EGP</span>${item.qty * item.price}</bdi></span>
                        </td>
                        <td data-title="Remove" class="removecart" onclick="Removecart(${item.id})">
                            <i class="fal fa-trash-alt"></i>
                        </td>
                    </tr>`))}</tbody>
                </table>`)}
    Datacheckout(){
        return (this.Arraycartelment.map(item=>` <tr class="cart_item">
        <td data-title="Product">
            <a class="cart-productimage" href="#"><img width="91" height="91" src="${item.image}"
             onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Image"></a>
        </td>
        <td data-title="Name">
            <a class="cart-productname" href="#">${item.name}</a>
        </td>
        <td data-title="Price">
            <span class="amount"><bdi><span>  EGP </span>${item.price}</bdi></span>
        </td>
        <td data-title="Quantity">
            <strong class="product-quantity">${item.qty}</strong>
        </td>
        <td data-title="Total">
            <span class="amount"><bdi><span> EGP </span>${item.price * item.qty}</bdi></span>
        </td>
    </tr>`))
    }
}

 /* ========
        Remove Cart
    ======== */
    function Removecart(id){
        console.log(id)
        $.ajax({
            type: 'POST',
            url: "https://jiraapi.momentum-sol.com//api/remove/cart",
            // Fetch the stored token from localStorage and set in the header
            headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
            data: {
                product_id:[id,id]
            },
            dataType: "json",
            success: function(reusalte){
                console.log(reusalte)
                location.reload(true);
            },
            error: function(err){
                console.log(err)},
             
        })
}


$.ajax({
    url: `https://jiraapi.momentum-sol.com/api/get/wishlist?lang=en`,
    async: true,
    type: 'GET',
    // Fetch the stored token from localStorage and set in the header
    headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
    error: function(err){
        console.log(err)},
     success: function(reusalte){
        $(".wishlist-count").text(reusalte.data.length)
    },
});





