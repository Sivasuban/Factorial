function fact() {
    var i, num, f;

    num = document.getElementById("num").value;
    if (num === "" || isNaN(num) || num < 0) {
        document.getElementById("res").innerHTML = "Please enter a valid positive number.";
        return;
    }

    f = 1;
    for (i = 1; i <= num; i++) {
        f *= i;
    }

    document.getElementById("res").innerHTML = "The factorial of the number " + num + " is: " + f;
}