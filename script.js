let targetNum = Math.floor((Math.random() * 100) + 1);
console.log(targetNum);

let min = 1;
let max = 100;

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
        output.innerHTML = "LOWER NUMBER PLEASE";
    }

    else if (enteredNum < targetNum) {
        output.innerHTML = "HIGHER NUMBER PLEASE";
    }
}
check.addEventListener("click", myFunction);


let range = document.getElementById("nsButton");
let rangeInput = document.getElementById("narrowSearch");
let set = document.getElementById("set");


range.addEventListener("click", () => {
    range.style = "display:none";
    rangeInput.style = "display:flex";
});

set.addEventListener("click", () => {

    let num1 = document.getElementById("range1").value;
    let num2 = document.getElementById("range2").value;
    console.log(num1, num2);
    if (num1 == "" || num2 == "") {
        alert("empty  value");
        return;
    }
    else if (num1 > num2) {
        alert("Lower range cant be higher than higher range");
        return;
    }
    else if (num1 == num2) {
        alert("Enter two diff number")
        return;
    }
    else {
        max = num2;
        min = num1;
        let newNum = Math.floor(Math.random() * (max - min + 1)) + Number(min);
        targetNum = newNum;

        document.getElementById("hint").innerText = `Hint : Number is somewhere between in ${num1} to ${num2}`;

        range.style = "display:flex";
        rangeInput.style = "display:none";
    }


});