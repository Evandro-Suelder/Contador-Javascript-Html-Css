var currentNumberNew = document.getElementById("currentNumber")
var currentNumber = 0;

function decrement() {
    if (currentNumber > -10) {
        currentNumber = currentNumber -1;
        currentNumberNew.innerHTML= currentNumber
    } else {
        alert("Número minimo atingido !!")
    }
}

function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber +1;
        currentNumberNew.innerHTML= currentNumber
    } else {
        alert("Número máximo atingido !!")
       
    }
    
}






