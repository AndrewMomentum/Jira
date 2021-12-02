var main = function(){
    var locationid = window.location.href.split('?')[1];
    var pageid = window.location.href.split('#')[1];

    const Datacategory = [];
    $.ajax({
        url: `https://jiraapi.momentum-sol.com/api/products/${locationid}?lang=en&paginate=9&page=${pageid}`,
        async: true,
        type: 'GET',
        error: function(err){
            console.log(err)},
         success: function(reusalte){
            Datacategory.push(...reusalte.data.data)
            Createshopingdata(reusalte.data.data,Datacategory)
        },
    });

}


function Createshopingdata(Arraydatashoping,Datacategory){
    $('.breadcumb-title').text(Datacategory[0].category.name_en);
    $("#Shopdataperntone").append(Arraydatashoping.map(item=>`<div class="col-sm-6 col-xl-4">
    <div class="vs-product-box1 thumb_swap">
            <div class="product-img">
                <a href="shop-details.php?${item.barcode}"><img src="${item.image}" id="product_boximage" alt="Product Image" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" class="w-100"></a>
                <a href="shop-details.php?${item.barcode}"><img src="${item.image}" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" class="w-100 img_swap"></a>
            </div>
        <div class="product-content">
            <div class="actions-btn">
                <a href="#"><i class="fal fa-cart-plus"></i></a>
                <a href="#"><i class="far fa-search"></i></a>
                <a href="#"><i class="fal fa-heart"></i></a>
                <a href="#"><i class="fal fa-layer-group"></i></a>
            </div>
            <h4 class="product-title h5 mb-0"><a href="shop-details.php?${item.barcode}">${item.name_en}</a></h4>
            <span class="price font-theme"><strong>${item.price}</strong></span>
            
        </div>
    </div>
</div>`))
$("#Shopdatapernttwo").append(Arraydatashoping.map(item=>`<div class="col-sm-6 col-lg-6 col-xl-6">
<div class="vs-product-box2 d-xl-flex has-border thumb_swap">
    <div class="product-img">
        <a href="shop-details.php?${item.barcode}"><img src="${item.image}" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" class="w-100"></a>
        <a href="shop-details.php?${item.barcode}"><img src="${item.image}" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" class="w-100 img_swap"></a>
    </div>
    <div class="product-content d-xl-flex align-items-center">
        <div>
            <h4 class="product-title h5 mb-1"><a href="shop-details.php?${item.barcode}">${item.name_en}</a></h4>
            <span class="price font-theme"><strong>${item.price}</strong></span>
        </div>
    </div>
</div>
</div>`))



}

$(document).ready(main);


/*
testImage(Arraydataproudect.image).then(

    function fulfilled() {
        $("#bigproductimg").append(`<div class="product-img">
        <img src="${Arraydataproudect.image}" alt="Shop Image" class="w-100">
       </div>`)
      
    },

    function rejected() {
       $("#bigproductimg").append(`<div class="product-img" id="proudectimgerror">
       <img src="assets/img/shop/Jira-openning-screen.png" alt="Shop Image">
      </div>`)
    }

);

function testImage(url) {

    // Define the promise
    const imgPromise = new Promise(function imgPromise(resolve, reject) {

        // Create the image
        const imgElement = new Image();

        // When image is loaded, resolve the promise
        imgElement.addEventListener('load', function imgOnLoad() {
            resolve(this);
        });

        // When there's an error during load, reject the promise
        imgElement.addEventListener('error', function imgOnError() {
            reject();
        })

        // Assign URL
        imgElement.src = url;

    });

    return imgPromise;
}
*/
