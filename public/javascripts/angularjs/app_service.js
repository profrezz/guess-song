app.service('FetchService', function($http) {

    this.getRandomYoutube = function (x) {
        
        return $http.get("/api/getrandom");
    }

});