var cur_m, goal_m, rate_m, temp;
var counter = 0;

cur_m = prompt("현재 금액을 입력해 주세요");
if (isNaN(cur_m)) {
    alert("숫자를 입력해 주세요");
} else {
    cur_m = parseInt(cur_m);
    temp = cur_m;
}
goal_m = prompt("목표 금액을 입력해 주세요");
if (isNaN(goal_m)) {
    alert("숫자를 입력해 주세요");
    goal_m = parseInt(goal_m);
}
rate_m = prompt("연이율을 입력해 주세요");
if (isNaN(rate_m)) {
    alert("숫자를 입력해 주세요");
    rate_m = parseInt(rate_m);
}

while (temp < goal_m) {
    temp += (temp * rate_m);
    counter++;
}
string = '“현재의 금액 ' + cur_m + '만 원이 이자율 ' + rate_m * 100 + '%로 목표금액 ' + goal_m + '만 원이 되려면 필요한 시간은 ' + counter + '년입니다”';

document.querySelector('#output').textContent = string;
