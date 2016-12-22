$(function() {
    $(".addCart").click(function(e) {
        //e.preventDefault;

        var inp = $(this).parent().parent().find("input").val();
        var qty = $(this).parent().parent().find($(".avail")).text();
        qty = parseInt(qty);
        inp = parseInt(inp);
        //alert(qty);
        if(inp == "" || inp ==0 || isNaN(inp) ){
            alert("Please insert a quantity");
        }
        else if (qty == "" ||inp == 0 || isNaN(inp)){
           alert("No more items available of this product")
        }
        else if (inp > qty){
            alert("Please insert an available quantity");
        }
        else {
            var clickedid = this.id;
            var price = $(this).parent().parent().find($(".price")).text();
            var forAction = $(this).parent().parent().find($(".avail"));
            price = parseInt(price);
            
            if (confirm(" The price of this transaction is" + price*inp +" $ Are you sure")) {

                $.post('/api/method/eshopapp.www.shopcart.addToShopcart',
                    {id: clickedid, qty: inp, price: price},
                    function (data) {
                    forAction.text(qty - inp+" ");

                    });
            }

        }
        return false;
    });
});
