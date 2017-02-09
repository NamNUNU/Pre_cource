# Twittler

### What's Already Here
이 리포에는 가짜 twitter유저가 twit 메시지를 random하게 만들어 data로 저장하는 JavaScript program이 들어 있습니다.

이 data는 twitter에 가입하고 누군가를 follow하면 볼수 있을만한 data입니다. (tweet은 시간이 갈수록 많아집니다.)

그 JavaScript 프로그램은 `data_generator.js`에 코딩 되어입니다. 그 JavaScript 파일의 코드 하나 하나 이해 하실 필요 없습니다. 

아래는 `data_generator.js`가 하는 일입니다:  
  * global variable인, `users` 와 `streams`를 만듭니다.
    * `users` 는 array of strings입니다. -- 여러분이 follow하는 분들의 username 이지요.
    * `streams`는 2개의 property를 가지고 있습니다. `users` 와 `home`.
      * `streams.home`은 array of tweets입니다. 이 `streams.home`은 여러분이 follow하는 모든 유저의 tweet들이 있습니다.
      * `streams.users` 는 유저의 username을 key로 가지고 있는 Object입니다. `streams.users.seunghoon`은 `seunghoon` username이 쓴 tweet을 가지고 있습니다.
  * `streams`에 꾸준히 data를 넣어주는 일을 시작합니다.

`app.js`안에서 거의 모든 작업을 하게 될것입니다.

NOTE: 만들어진 tweet들은 연대순 순서로 보이게 됩니다.

Basic Requirements:

- [ ] User의 새로운 tweet를 보여주세요.  (자동으로 새로운 tweet이 만들어질때 마다 보이게 해도 되고, 버튼을 만들어 click시 새로운 tweet를 보이게 해도 됩니다.)
- [ ] tweet이 언제 만들어졌는지 timestamp를 보여주세요.
- [ ] 여러분이 만든 interface를 멋지게 디자인 하세요. (CSS를 사용하시면 되겠죠)
- [ ] username을 click하면 그사람의 timeline이 보이도록 하세요.

Extra credit:

- [ ] 보통 사람이 알아듣기 쉽도록 시간을 읽기 싶게 바꾸세요. 예) "10 minutes ago".  NOTE: library를 찾으시면 편할것 입니다.
- [ ] tweet을 만들수 있도록 하세요. (이것을 하기 위해서는 `data_generator.js`를 알아야 할것 입니다. 하지만 `data_generator.js`의 코드들을 바꿀 필요는 없습니다.)


