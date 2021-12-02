$(document).ready(function(){
    $.ajax({
        url: "https://jiraapi.momentum-sol.com/api/get/orders?lang=en",
        async: true,
        type: 'GET',
        // Fetch the stored token from localStorage and set in the header
        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
        error: function(err) {
        console.log("err")
        },
         success: function (reusalte) {
            console.log(reusalte.data.orders)
            Arraymap(reusalte.data.orders)
        },
    });
  }
  );

  ///no_data
  function Arraymap(data){
      ArrOrders=[];
    data.map(item=>console.log(
        ArrOrders.push(item.order_products)
        ))
    $("#body_orders").append(ArrOrders.map(item=>`<tr>
    <td>${item[0].name_en}</td>
    <td>${item[0].price}</td>
    <td>${item[0].qty}</td>
    <td>${item[0].total}</td>
</tr>`)
    )}
/*

      
*/