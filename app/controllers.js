var starBoxController = angular.module('starBoxController', []);

starBoxController.controller('MainPageCtrl', ['$scope', '$http',
	function ($scope, $http) {
		var data = [];
		for (var i = 0, l= 20; i<l; i++) {
			data.push({
				title: "Title " + i,
				author: "Author " + i,
				date: "Date " + i,
				body: "Body " + i
			});
		}
		$scope.data = data;
		console.log(data);
	}]);

starBoxController.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.phoneId = $routeParams.phoneId;
	}]);