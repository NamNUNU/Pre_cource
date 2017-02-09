SC.initialize({ client_id: "d29ad0142b2cd0a47ad2e561334c8e0f" });

$('.search').on('click',function(){
  SC.get('/tracks', { q: $('input').val() })
    .then(function(tracks) {
      SC.oEmbed(
        tracks[0].uri, {
          auto_play: true,
          element: document.querySelector('#current-sound')
        }
      );
    });

  SC.get('/tracks', { q: $('input').val() })
    .then(function(tracks) {
      tracks.forEach(function(track) {
        $('body')
          .append($('<p id="' + track.uri  + '"></p>')
          .text(track.artwork_url + track.title + track.uri));
      });
    });
})
