(function () {
    "use strict";
    var starboxApp = angular.module('starboxApp', [
      'ngRoute',
      'starBoxController'
    ]);

    starboxApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/home', {
            templateUrl: 'src/view/home.html',
            controller: 'MainPageCtrl'
          }).
          when('/faq', {
            templateUrl: 'src/view/faq.html',
            controller: 'FAQPageCtrl'
          }).
          otherwise({
            redirectTo: '/home'
          });
      }]);
})();