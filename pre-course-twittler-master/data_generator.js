/* globals window, streams, users, setTimeout,  */
 //====================================================
 //  NOTE: 이파일은 가짜 tweet data를 만듭니다. 이파일 건들지 않기를 바랍니다.
 // 그리고 index.html에 있는것만 바꾸시기 바랍니다.
 //====================================================

// set up data structures
window.streams = {};
streams.home = [];

// 유저들을 담는 object
streams.users = {};

// 유저 리스트 (4명)
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];

// target object의 key를 다 꺼내서 array로 만든다
//['user1','user2']
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
//  트윗을 더하는 함수
var addTweet = function(newTweet){
  var username = newTweet.user;           //  유저의 이름을 새로 저장
  streams.users[username].push(newTweet); //  해당 유저의 히스토리에 트윗 저장
  streams.home.push(newTweet);            //  home에 트윗 저장
};

// utility function
// 랜덤 index를 뽑아낸 후 인자로 받은 배열의 해당 index의 값을 return 한다.
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
// 랜덤으로 제작할 트윗의 소스들이 요소별로 있음
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

// 랜덤으로 구문 요소를 뽑아내어 문장 완성
var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// 무작위(random)한 스케쥴(schedule)에 random한 tweet만들기
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);  //  랜덤으로 유저 선택
  tweet.message = randomMessage();    //  랜덤 메세지 생성
  tweet.created_at = new Date();      //  새로운 작성 일자 생성
  addTweet(tweet);
};

//  트윗 10회 생성
for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

// 일정시간이 지난 후 자신을 다시 호출
// setInterval
var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  tweet.created_at = new Date();
  addTweet(tweet);
};
