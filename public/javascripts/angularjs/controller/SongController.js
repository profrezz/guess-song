app.controller('SongCtrl', function($rootScope, $scope, $interval, SongService) {
   $scope.pageTitle= "TEST";
   $scope.youtube = "";
   $scope.startsec = 0;

   $scope.verifyYoutubeLink = function() {
       if($scope.youtube != "" && $scope.youtube.indexOf("https://www.youtube.com/watch?v=") > -1) {
            return true;
       }
       return false;
   }

   $scope.getYoutubeCode = function () {
       return $scope.youtube.split("=")[1]; //GYpzzbVRrsk
   }
   //https://www.youtube.com/watch?v=GYpzzbVRrsk

   $scope.getYoutubeVideo = function(code) {
       if( $scope.verifyYoutubeLink() ){
            var code = $scope.getYoutubeCode();
            player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: code,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });

            SongService.getYoutubeContent($scope.youtube).success(function(data) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(data, 'text/html');
                doc.firstChild; //this is what you're after.
            });
       }
       
   }
    
   
   function updateTime(){
        if(player == undefined) return;
        $scope.startsec =  Math.floor( player.getCurrentTime());
   }

    var tag = document.createElement('script');
    var player;
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    function onYouTubeIframeAPIReady() {
    
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
    event.target.playVideo();
    
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 6000);
        $interval(updateTime, 500);
        done = true;
    }
    }
    function stopVideo() {
    player.stopVideo();
    }

});

// 2. This code loads the IFrame Player API code asynchronously.
