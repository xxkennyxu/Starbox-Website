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
          when('/features', {
            templateUrl: 'src/view/features.html',
            controller: 'FeaturesPageCtrl'
          }).
          when('/faq', {
            templateUrl: 'src/view/faq.html',
            controller: 'FAQPageCtrl'
          }).
          when('/aboutus', {
            templateUrl: 'src/view/aboutus.html',
            controller: 'AboutUsPageCtrl'
          }).
          otherwise({
            redirectTo: '/home'
          });
      }]);
})();