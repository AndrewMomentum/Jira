var main = function(){
    var locationid = window.location.href.split('?')[1];
    console.log(locationid)
    $.ajax({
        url: `https://jiraapi.momentum-sol.com/api/barcode?lang=en&barcode=${locationid}`,
        async: true,
        type: 'GET',
        error: function(err){
            console.log(err)},
         success: function(reusalte){
            Createproudect(reusalte.data)
            Addcart(reusalte.data.id)
            console.log(reusalte.data)
        },
    });

}
$(document).ready(main);


function Createproudect(Arraydataproudect){
   $("#proudect_title").text(Arraydataproudect.name_en),
   $("#proudect_price").text(Arraydataproudect.price),
   $("#proudect_description").text(Arraydataproudect.description_en),
   $("#proudect_category").text(Arraydataproudect.category.name_en),
   $("#breadcumb-title").text(Arraydataproudect.category.name_en),
   $("#bakgroundcatggros").attr('data-bg-src',  Arraydataproudect.category.image)
   
testImage(Arraydataproudect.image).then(

    function fulfilled() {
        $("#bigproductimg").append(`<div class="product-img">
        <img src="${Arraydataproudect.image}" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Shop Image" class="w-100">
       </div>`)
      
    },

    function rejected() {
       $("#bigproductimg").append(`<div class="product-img" id="proudectimgerror">
       <img src="assets/img/shop/Jira-openning-screen.png" alt="Shop Image">
      </div>`)
    }

);
}


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







function Addcart(id){
    $("#add_cart").click(function(e) {
        e.preventDefault(),
        $.ajax({
            type: 'POST',
            url: "https://jiraapi.momentum-sol.com/api/add/cart",
            headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
            data: {
                product_id:id,
                qty: $('.qty-input').val()
            },
            dataType: "json",
            success: function(reusalte){
                console.log(reusalte)
            },
            error: function(err){
                console.log(err.message)},
             
        })
    })
}




/*
function testImage(URL) {
    var tester=new Image();
    tester.onload=imageFound;
    tester.onerror=imageNotFound;
    tester.src=URL;
    console.log(tester)
}

function imageFound() {
    console.log('That image is found and loaded');
}

function imageNotFound() {
    console.log('That image was not found.');
}
*/

