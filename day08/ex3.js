var n = 30;
var count = 1;
var string = '';

while (count <= n) {
    if (count % 2 === 0) {
        string += '<p id="even">';
    } else {
        string += '<p id="odd">';
    }
    if (count === n) {
        string += count + "</p>" + "<hr>";
    } else {
        string += count + "</p>" + "<hr>";
    }
    count++;

}
console.log(string);

document.querySelector('#target').innerHTML = string;
