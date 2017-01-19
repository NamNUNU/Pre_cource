var name, age, gender, is_member, thirsty, drink_of_choise

name = "김철수"
age = 25
gender = "male"
is_member = false
thirsty = true

if(age<21){
  if(gender=== "male")
    alert("사장님, 21살 미만은 가입할 수 없습니다.")
  else
    alert("사모님, 21살 미만은 가입할 수 없습니다.")
}
else{
  if(gender=== "male")
    alert("미스터 " + name + ", 웹사이트에 온것을 환영합니다.")
  else
    alert("미스 " + name + ", 웹사이트에 온것을 환영합니다.")

  if(thirsty){
    drink_of_choise = prompt("어떤 음료를 드릴까요?")
    if(drink_of_choise==="우유"){
      alert("강퇴당하셨습니다.")
    }
    else{
      alert("네, " +name+"님 지금 바로 " + drink_of_choise + " 드리겠습니다.")
    }
  }
}
