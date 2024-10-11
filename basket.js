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
    
}

function calculateAndDisplayTotal() {
    const basket = {
        apple: parseInt(document.getElementById('appleQty').innerText),
        banana: parseInt(document.getElementById('bananaQty').innerText),
        orange: parseInt(document.getElementById('orangeQty').innerText)
    };

    const prices = {
        apple: parseFloat(document.getElementById('applePrice').innerText),
        banana: parseFloat(document.getElementById('bananaPrice').innerText),
        orange: parseFloat(document.getElementById('orangePrice').innerText)
    };
}