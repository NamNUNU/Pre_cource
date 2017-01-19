var n, result;
var i = 1;
result = 1;
n = 5;

while (i <= n) {
    result *= i;
    i++;
}

document.querySelector('#n').textContent = n;
document.querySelector('#result').textContent = result;
