alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/

let basketCost=(b,p)=>{
    alert("doing something");
    return 0; //clearly wrong!
}

function calculateTotal(basket, prices){

        const newArr = basket.map(myFunction)

        function myFunction(index, num) {
          console.log(index +" "+num);
        }
    }


function calculateAndDisplayTotal() {
    const basket = {
        apple: parseInt(document.getElementById('appleQty').value),
        banana: parseInt(document.getElementById('bananaQty').value),
        orange: parseInt(document.getElementById('orangeQty').value)
    };

    const prices = {
        apple: parseFloat(document.getElementById('applePrice').value),
        banana: parseFloat(document.getElementById('bananaPrice').value),
        orange: parseFloat(document.getElementById('orangePrice').value)
    };

    calculateTotal(basket,prices);
    //alert(total);
}