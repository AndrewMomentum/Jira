const Arraydata =[];
$(document).ready(function(){
    $.ajax({
        url: "https://jiraapi.momentum-sol.com/api/get/address",
        async: true,
        type: 'GET',
        // Fetch the stored token from localStorage and set in the header
        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
        error: function(err) {
        console.log("err")
        },
         success: function (reusalte) {
            Arraydata.push(...reusalte.data)
            Arraymap(Arraydata)
        },
    });
  }
  );


  function Arraymap(data){
        data.map(item=>
            $("#tbody_addres").append(`<tr>
                <td>${item.name}</td>
                <td>${item.phone}</td>
                <td>${item.address}</td>
                <td>${item.city}</td>
                <td>${item.area}</td>
                <td style="width: 65px;" id="success_edit" onclick="Datafilter(${item.id})" >
                    <a class="success" style="color: rgb(123, 223, 105)">
                        <i class="far fa-edit"></i>
                    </a>
                </td>
                <td style="width: 65px;" id="success_delete" onclick="Deleteaddress(${item.id})">
                    <a class="delete warning" style="color: rgb(189, 55, 55)">
                        <i class=" fa fa-trash" aria-hidden="true"></i>
                    </a>
                </td>
            </tr>`)
        )
    }

  

    function Datafilter(id){
        const Detailsedite=Arraydata.filter(item=>{
            return  item.id===parseInt(id)
        })
        Get_AddressEdit(id)
       //window.location='edit.html'
    }

    /* ----
        Edit Address
            ----- */

        /* ===== Get Address ==== */

        function Get_AddressEdit(item_id){
            $.ajax({
                url: `https://jiraapi.momentum-sol.com/api/get_address/${item_id}`,
                async: true,
                type: 'GET',
                // Fetch the stored token from localStorage and set in the header
                headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
                error: function(err){console.log("err")},
                 success: function(reusalte){
                    console.log(reusalte.data.id),
                    localStorage.setItem("dataid",reusalte.data.id)
                },
            })
        }

    /* -----
        Delete Addres
        ----- */
        function Deleteaddress(itemid){
                $.ajax({
                    type: 'POST',
                    url: 'https://jiraapi.momentum-sol.com/api/delete/address',
                    headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`},
                    data: {
                        id: itemid,
                    },
                    dataType: "json",
                    success: function(response) {
                    console.log("Success!");
                    location.reload(true);
                    },
                    error: function(err) {
                    console.log(err);
                    }
                })
            }

            