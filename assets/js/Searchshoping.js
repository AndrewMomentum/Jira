let url =window.location.search;
const urlParams = new URLSearchParams(url);

let search = urlParams.get('search');



let page = urlParams.get('page');
if(page)
{
     page =page
   
}
else
{
    page=1
}

var main = function(){
   
 
    const Datacategory = [];

    $.ajax({
        url: ` https://jiraapi.momentum-sol.com/api/search?lang=en&search=${search}&paginate=18&page=${page}`,
        async: true,
        type: 'GET',
        
        error: function(err){
            console.log(err)},
         success: function(reusalte){
           console.log(reusalte.data)
            if(reusalte.data.data.length!=0)
            {
            $(".nodataserah").css("display","none");
            Datacategory.push(...reusalte.data.data)
            Createshopingdata(reusalte.data.data,Datacategory)
            let arr=[]
            for(var i=1;i<=reusalte.data.last_page;i++)
            {
                arr.push(i);
            }
            var html=simpleTemplating(arr)
            $('#data-container').html(html);
        }else{
            $(".nodataserah").css("display","block");
        }
       
        
        },
    });
   

}
function simpleTemplating(data) {
    var html = '<ul>';
    $.each(data, function(index, item){
        let url=`search.php?search=${search}&page=${item}` ;
        html += `<li><a href="${url}"> ${item} </a></li>`;
    });
    html += '</ul>';
    return html;
}

function Createshopingdata(Arraydatashoping,Datacategory){
    // $('.breadcumb-title').text(Datacategory[0].category.name_en);
    $("#Shopdataperntone").append(Arraydatashoping.map(item=>`<div class="col-sm-6 col-xl-4">
    <div class="vs-product-box1 thumb_swap">
            <div class="product-img">
                <a href="shop-details.php?${item.barcode}"><img src="${item.image}" id="product_boximage" onerror="this.src='assets/img/shop/Jira-openning-screen.png'" alt="Product Image" class="w-100"></a>
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


