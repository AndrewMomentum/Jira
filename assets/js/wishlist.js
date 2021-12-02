var main = function(){
    $.ajax({
        url: `https://jiraapi.momentum-sol.com/api/get/wishlist?lang=en`,
        async: true,
        type: 'GET',
        // Fetch the stored token from localStorage and set in the header
        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
        error: function(err){
            console.log(err)},
         success: function(reusalte){
            console.log(reusalte.data)
            Wishlistpadge(reusalte.data)
        },
    });

}
$(document).ready(main);



function Wishlistpadge(ArrayWishlist){
    var Qtynumberdata =new Datawishlistitems(ArrayWishlist);
    
    if(ArrayWishlist.length == 0){
        return null
    }else{
        $("#wishlistttable").append(Qtynumberdata.Datawishlist())
    }

}


class Datawishlistitems{
    constructor(ArrayWishlist){
        this.ArrayWishlist = ArrayWishlist;
    }
    Datawishlist(){
        return (`<table class="cart_table">
                    <thead>
                        <tr>
                            <th class="cart-col-image">Image</th>
                            <th class="cart-col-productname">Product Name</th>
                            <th class="cart-col-price">Price</th>
                            <th class="cart-col-remove">Remove</th>
                        </tr>
                    </thead>
                    <tbody>${this.ArrayWishlist.map(item=>(`<tr class="cart_item">
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
                        <td data-title="Remove" class="removewishlist" onclick="Removewishlist(${item.id}); return false;">
                            <i class="fal fa-trash-alt"></i>
                        </td>
                    </tr>`))}</tbody>
                </table>`)}
  
}

 /* ========
        Remove Wishlist
    ======== */
function Removewishlist(id){
        $.ajax({
            type: 'POST',
            url: "https://jiraapi.momentum-sol.com/api/remove/wishlist",
            headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
            data: {
                product_id:[id,id],
            },
            dataType: "json",
            success: function(reusalte){
                console.log(reusalte)
                location.reload(true);
            },
            error: function(err){
                console.log(err.message)},
             
        })
}
