var num;
var temp;
var rand = Math.floor(Math.random() * 100) % 6;
var check = true;
var counter = 0;

while (check) {
    num = prompt("숫자를 맞춰 보세요");
    if (isNaN(num)) {
        alert("다시 입력해 주세요");
    } else {
        temp = parseInt(num);
        if (temp > rand) {
            alert("숫자가 너무 큰데요?");
        } else if (temp < rand) {
            alert("숫자가 너무 작은데요?");
        } else {
            alert("숫자 " + rand + "을(를) " + counter + "번 만에 맞추셨네요~ " + "정답입니다!");
            string = "<p><strong>상으로 숫자를 웹페이지에 기록해 드릴게요!</strong><p><hr>" + "<p>" + "숫자 " + rand + "을(를) " + counter + "번 만에 맞추셨네요~ "
            check = false;
        }
        counter++;
    }
}

document.querySelector('#event').innerHTML = string
