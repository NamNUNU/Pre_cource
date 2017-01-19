var response, image_path
var secret_saying = document.querySelector('#message').textContent

if(secret_saying==="독수리는 자정에 날아갑니다"){
  response = "통과하세요"
}
else{
  response = "적이다 공격하라!"
}

document.querySelector('#result').textContent = response
