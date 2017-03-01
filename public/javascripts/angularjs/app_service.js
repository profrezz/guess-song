app.service('SongService', function($http) {

    this.getRandomYoutube = function (x) {
        
        return $http.get("/api/getrandom");
    }

    this.getYoutubeContent = function (url) {
        //watch-title
        return $http.get(url);
    }

});