# Underbar

Underbar sprint는 [JavaScript Koans](https://github.com/mrdavidlaing/javascript-koans)에서 사용하는 TDD방식과 같은 형식으로 구성 되어있습니다.  
즉, 이 sprint는 [Mocha Test Suite](http://visionmedia.github.io/mocha)을 사용하여 TDD방법으로 새로운 것들을 배웁니다.  
이 sprint에서 여러분은 현업에서 개발을 편하게 할수있는 쓸모있는 function들을 모아놓은 유명한 library인 [underscore.js](http://underscorejs.org/)를 재구성 하는 일을 할것입니다.

## 링크들과 참고자료들

알아두면 좋은것들:

- 이 sprint에 있는 function들을 보면서 여러분은 지금 보고 있는 function이 무슨 argument를 받는지 또는 어떻게 작동되는지와 같은 궁금증 갖게 되실것입니다. 문제가 들어있는 파일에 comment가 답을 정확히 안해준다면, underscore의 공식 [documentation](http://underscorejs.org/docs/underscore.html)을 참고하세요. 
- 많은 function들이 "collection"을 받아 작업을 합니다. "collection"은 array또는 object입니다. 그렇기에 array일때와 object일때를 모두 감안해서 코드를 짜주셔야 합니다.
    - `Array.isArray(colllection)`을 사용하여 `collection`이 `array`인지 아니면 `object`인지 식별할수 있습니다.
- Javascript는 `Math` object를 가지고 있습니다. 이 object안에는 쓸모있는 function들이 많이 있습니다. [이곳](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math)을 읽어보시기를 추천드립니다.   
- function안에는 `arguments`라는 keyword가 있습니다. 이 keyword는 function에 전달된 모든 argument들을 가지고 올수 있습니다. argument들에 하나씩 이름을 선정 하지 않았어도 `arguments` keyword를 사용하여 가지고 올수 있지요. 이 keyword를 사용하면 function에 어떠한 argument들이 전달될지 미리 알고 있지 않아도 전달된 argument들을 사용할수 있어 개발시 편하게 쓰입니다. 
    - `arguments.length`를 사용하여 argument들이 몇개인지 알수 있으며 `arguemnts[i]`를 사용하여 argument를 한개씩 사용할수 있습니다.
    - `arguments`는 `array`같은 특별한 object입니다. `array` 같기는 하지만  `slice`, 나 `push`같은 array method들을 사용할수 없습니다. [이곳](http://www.sitepoint.com/arguments-a-javascript-oddity/)에서 더 읽을수 있습니다.
- `myParameters`라는 array와 `myFunction`이라는 function이 있다고 가정해봅시다.
`myFunction`이라는 function을 `myParameters`안에 있는 element들을 `myFunction`의 argument들로 사용하여 invoke하고 싶다면 `myFunction.apply(context, myParameters)`라고 쓰시면 됩니다.
첫번째 parameter인 `context`는 function이 invoke되는 환경을 말합니다.
`myFunction`안에서는 `this`라는 keyword를 사용하여 `context`를 사용할수 있습니다.
이번 sprint에서는 `context`값을 `null`을 사용하시면 됩니다.
`.apply`에 대하여 더 알고 싶으시면 [apply의 관한 document](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/apply)를 읽으세요.

## 최소한 해야할것들(Bare Minimum Requirements)

지금 리포의 파일을 보면 function body안의 코드들이 대부분 없습니다.
이제 여러분은 function body를 체워 코드들이 잘돌아가도록 해야 합니다.
function들은 2개의 section으로 놔누어 놓았고 test suite도 2개로 놔누어 놓았습니다.

`spec` directory에 test suite file들이 저장되어 있습니다.
여러분의 function body들을 채워 test를 통과 하도록 하는것입니다.
`SpecRunner.html`을 브라우저에 열면 모든 test를 실행할수 있습니다.

`src/underbar.js` file안에는 아래 보이는 function들의 definition과 설명이 들어가 있습니다. (이탈릭체로 써있는 function은 이미 완성된 function입니다)
각각의 function body를 완성 시켜 test를 통과하세요:


#### Part I:
- [ ] identity
- [ ] *first*
- [ ] last
- [ ] each
- [ ] *indexOf*
- [ ] filter
- [ ] reject
- [ ] uniq
- [ ] map
- [ ] *pluck*
- [ ] reduce

#### Part II:
- [ ] *contains*
- [ ] every
- [ ] some
- [ ] extend
- [ ] defaults
- [ ] *once*
- [ ] memoize
- [ ] delay
- [ ] shuffle


## Advanced Content

- [ ] invoke
- [ ] sortBy
- [ ] zip
- [ ] flatten
- [ ] intersection
- [ ] difference
- [ ] throttle

**Note:** 브라우저에는 `forEach`, `map`, `reduce`, 그리고 `filter`와 같은 function들이 이미 존재합니다. 이 function들은 여러분이 구현해야하는 기능들을 이미 구현할수 있습니다. function body를 코딩하실때 브라우저에 이미 존재하는 function은 사용하지 마세요.


### Throttle

이 sprint에는 좀 많이 복잡한 function이 있습니다. 그 복잡한 function을 푸는것을 도와주기위에 여기에 설명을 더하겠습니다.   

**_.throttle(func, wait)**: argument로 받은 `func`를 새로운 function에 감싸 `wait` milliseconds동안 최대 한번만 부를수 있게 구현하세요.
이 function은 서버에 요청을 보낼때마다 비용이 들경우에 서버 요청을 몇초안에는 여러번 못보내게 사용하면 유용합니다.
어떻게 사용되나 한번 볼까요?

```javascript
var counter = 0;
var increment = function() {
  return counter += 1;
};

//  `throttledIncrement`라는 function을 만드세요. 
// 이 function은 100ms안에 최대 한번만 invoke되어야 합니다.

var throttledIncrement = _.throttle(increment, 100);

throttledIncrement(); // return 1; `counter`의 값은 1
throttledIncrement(); // return 1; `increment()`가 100ms후에 call됨
throttledIncrement(); // return 1; 아무것도 하지 않음

// 100ms뒤 `increment`가 실행됨
```

- throttle되어\_나온(throttled) function에 들어가는 argument들은 throttle\_되기전의\_원조(original) function에게 전달 되어야합니다. 
- throttled function이 주어진 기다리는 시간안에 한번더 실행될 경우 original function에서 가장 최근 반환된 value를 반환해야합니다.
- 만약 기다리는 시간이 100ms이고 throttle되어 반환된 function이 30ms전에 invoke되었다면, throttled function은 100ms 기다리는 시간이 끝나자 마자 invoke이 되어야 합니다.




## TERMS
#### Collection 
`array`와 `object`둘다를 말합니다. 즉 2개의 경우를 handling하셔야합니다.

#### Iterator
collection의 item마다 한번씩 invoke되는 function. 

merging
overwrite
function decorator
closure scope
delegate
.apply
result of a function
memorize
unique
delay
test suite
modify
http://mdn.io/Array.prototype.slice







