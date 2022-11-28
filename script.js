let targetNum = Math.floor((Math.random() * 100) + 1);

console.log(targetNum);

var input = document.getElementById("input");

var check = document.getElementById("btn");

var output = document.getElementById("output")

function myFunction() {
    var enteredNum = input.value;
    // var attempt = "0"

    if (!enteredNum) {
        output.innerHTML = "Please enter num to check";
    }

    else if (enteredNum == targetNum) {
        output.innerHTML = "Woah! You Guessed It right ";
    }

    else if (enteredNum > targetNum) {
        output.innerHTML = "Lower No. please";
    }

    else if (enteredNum < targetNum) {
        output.innerHTML = "Higher No. please";
    }

}

check.addEventListener("click", myFunction);

