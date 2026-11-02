const input = document.getElementById("input");
const clear = document.getElementById("clear");



function reverseString(str) {
    return str.split("").reverse().join("")

}


function check() {
    const value = input.value;
    const reverse = reverseString(value);
    const ans = document.getElementById("ans");


    if (value.toLowerCase() === reverse.toLowerCase()) {
        ans.innerHTML = "<u>It is Palindrome</u> <br><br>" + "Given value : " + value.toLowerCase() + " <br> Reversed : " + reverse.toLowerCase();
    }
    else {
        ans.innerHTML = "<u>It is not Palindrome</u> <br><br>" + "Given value : " + value.toLowerCase() + " <br> Reversed : " + reverse.toLowerCase();

    }

    input.value = "";

}

