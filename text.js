let a = "Test Button"

window.onload = function() {
    funtionSumOfMultiples();
  };

function gettest(){
    let b = 1;
}

myFunction = () =>{
    inputText = document.getElementById('userInput').value;

    if(inputText > 15 ){
        alert("Luggage cannot be exceed than 15kgs");
    }else{
        alert(inputText +" Kg");
    }
}

funtionSumOfMultiples = () => {

    let sum = 0;
    for(let i = 0; i < 10; i++){
        if( (i % 3 == 0) || (i % 5==0)){
            sum =+ i;
        }
    }

    alert("Sum of multiples of 3 and 5 below 10 : "+sum);
}
