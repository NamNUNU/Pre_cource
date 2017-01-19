var name, age, select, attack

name = prompt("모험을 떠나 볼까요? 용사님의 이름은 무엇인가요?")

alert(name + "님, 이제 게임을 시작하겠습니다. 먼저 시작 마을에 들어왔습니다.")

select = prompt("마을 사람이 말을 걸어옵니다, 대답할까요?(y/n)")

if(select==="y"){
  age = prompt("몇살인가??")
  if(age > 20){
    select = prompt("가서 약초를 좀 따다 주게(y/n)")
    if(select==="y"){
      select = prompt("마을을 나가다가 멧돼지가 나왔습니다 싸우시겠습니까?(y/n)")
      if(select==="y"){
        attack = prompt("어떻게 공격하시겠습니까?")
        if(attack==="도망간다"){
          alert("응 게임 끝~")
        }
        else{
          alert("약초를 얻고 승리했습니다!")
        }
      }
      else{
        alert("Game Over")
      }
    }
    else{
      alert("Game Over")
    }
  }
  else{
    alert("Game Over")
  }
}
else{
  alert("Game Over")
}
