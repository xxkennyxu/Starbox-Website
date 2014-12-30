var starboxApp = angular.module('starboxApp', [
  'ngRoute',
  'starBoxController'
]);

starboxApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'view/home.html',
        controller: 'MainPageCtrl'
      }).
      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      otherwise({
        redirectTo: '/home'
      });
  }]);