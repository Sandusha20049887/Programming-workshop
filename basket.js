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
 let totalCost = 0;
        for(let product in basket){
            if(prices.hasOwnProperty(product)){
                totalCost += basket[product] * prices[product]; 
            }
        }
        console.log(totalCost);
        return totalCost;
    }


function calculateAndDisplayTotal() {
    const basket = {
        apple: parseInt(document.getElementById('appleQty').value),
        banana: parseInt(document.getElementById('bananaQty').value),
        orange: parseInt(document.getElementById('orangeQty').value)
    };

    const prices = {
        apple: parseInt(document.getElementById('applePrice').innerHTML),
        banana: parseInt(document.getElementById('bananaPrice').innerHTML),
        orange: parseInt(document.getElementById('orangePrice').innerHTML)
    };

    let cost = calculateTotal(basket,prices);
    //alert(total);

    let txt = document.getElementById("totalCost");
    txt.innerHTML = cost;
}