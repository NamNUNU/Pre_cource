var n = 1;
var string = "";

while (n < 100) {
    if ((n % 3 === 0) && (n % 5 === 0)) {
        string += '<div class="FizzBuzz">' + "FizzBuzz" + "</div>";
    } else if (n % 3 === 0) {
        string += '<div class="Fizz">' + "Fizz" + "</div>";
    } else if (n % 5 === 0) {
        string += '<div class="Buzz">' + "Buzz" + "</div>";
    } else {
        string += n + "<br>";
    }
    n++;
}

document.querySelector('#string').innerHTML = string;
