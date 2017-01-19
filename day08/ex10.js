var num, temp;
var string = 'welcome '
temp = 1;

num = parseInt(prompt('숫자를 입력해 주세요'));
string += num + ',';

if (num !== 1) {
    string += ' meet ';
    while (temp < num) {
        if (temp === num - 1) {
            string += 'and ' + temp;
        } else {
            string += temp + ', ';
        }
        temp++;
    }
}

console.log(string);
