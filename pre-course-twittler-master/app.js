/* globals $, streams */
var visitor = "guest"
var $tweetContainer = $('#tweet-container');
$tweetContainer.html('');

var initialIndex = streams.home.length - 1;
var storeIndex = streams.home.length - 1;
streams.users[visitor]=[];
while(initialIndex >= 0){
  var tweet = streams.home[initialIndex];
  var $tweet = $('<div class="tweet"></div>');
  $tweet.html('<span class="user">@' + tweet.user+'</span>' + '<span class="msg"> : ' + tweet.message+'</span>'+'<div class="time">'+$.timeago(tweet.created_at)+'</div>');
  $tweet.prependTo($tweetContainer);
  initialIndex--;
}
bindEvent()

  // 자동 로딩
  //setInterval(Renew,1500);

  // 스크롤 오토 로딩
  // $(window).scroll(function(){
  //    if($(window).scrollTop() == $(document).height() - $(window).height()){
  //       Renew();
  //       bindEvent();
  //    }
  // });

$('#write').keydown(function(key) {
  if (key.keyCode == 13) {
    text = $('#write').val();
    $('#write').val("");
    writeTweet(text);
    Renew();
    bindEvent();
  }
});

$(document).ready(function(){
		// timeago 플러그인을 미래 시각으로 동작할 수 있게 설정
		jQuery.timeago.settings.allowFuture = true;
});

$('#button').on("click",function(){
  Renew();
})

function bindEvent(){
  $('.user').on("click",function(){
    var user = $(this).text().slice(1);
    var arr = streams.users[user]
    $tweetContainer.html('');
    console.log(arr);
    for(var i = 0; i<arr.length; i++){
      var msg = arr[i].message
      var $tweet = $('<div class="tweet"></div>');
      $tweet.html('<span class="user">@' + user+'</span>' + '<span class="msg"> : ' + msg +'</span>'+'<div class="time">'+$.timeago(arr[i].created_at)+'</div>');
      $tweet.prependTo($tweetContainer);
    }
  })
}

function Renew(){
  initialIndex = streams.home.length - 1;
  while(storeIndex < initialIndex){
    var tweet = streams.home[storeIndex];
    var $tweet = $('<div class="tweet"></div>');
    $tweet.html('<span class="user">@' + tweet.user+'</span>' + '<span class="msg"> : ' + tweet.message+'</span>'+'<div class="time">'+$.timeago(tweet.created_at)+'</div>');
    $tweet.prependTo($tweetContainer);
    storeIndex++;
  }
  bindEvent();
}




//====================================================
//  Other possible implementation
//====================================================

// var initialIndex = streams.home.length - 1;
// var lastIndex = 0;
// while(initialIndex >= lastIndex){
//   var tweet = streams.home[lastIndex];
//   var $tweet = $('<div></div>');
//   $tweet.text('@' + tweet.user + ': ' + tweet.message);
//   $tweet.appendTo($tweetContainer);
//   lastIndex++
// }
