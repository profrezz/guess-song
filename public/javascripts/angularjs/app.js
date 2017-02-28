var app = angular.module('myApp', ['ngRoute'])
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);

// app.config(function($routeProvider, $locationProvider) {
//     $routeProvider
//       .when("/", {
//         templateUrl : "js/view/main.html"
//       })
//       .when("/Map", {
//         templateUrl : "js/view/map.html",
//         controller: 'MapCtrl',
//       })

//      //$locationProvider.html5Mode(true);
// });



