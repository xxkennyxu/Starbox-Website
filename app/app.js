var starboxApp = angular.module('starboxApp', [
  'ngRoute',
  'starBoxController'
]);

starboxApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'view/main.html',
        controller: 'MainPageCtrl'
      }).
      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      otherwise({
        redirectTo: '/'
      });
  }]);