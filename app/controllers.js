var starBoxController = angular.module('starBoxController', []);

starBoxController.controller('MainPageCtrl', ['$scope', '$http',
	function ($scope, $http) {
		var data = [];
		for (var i = 0, l= 20; i<l; i++) {
			data.push({
				title: "Title " + i,
				author: "Author " + i,
				date: "Date " + i,
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo ultricies commodo. Aliquam ut ipsum ante. Suspendisse commodo tempor lacus, id fringilla metus ultricies non. Donec sodales augue magna, eget viverra libero aliquet id. Mauris ut elementum mauris, nec luctus nibh. Mauris finibus rhoncus urna, vel ullamcorper neque tincidunt eget. Pellentesque et elit ex. Nunc at elementum enim. Pellentesque mattis euismod felis et elementum. Ut vestibulum egestas mi, a consectetur tellus mattis a. Aenean ante lorem, finibus sit amet molestie eget, varius ac odio. Maecenas nunc lorem, suscipit sed pretium vitae, ornare a leo. Nunc hendrerit ultricies libero in eleifend. " + i
			});
		}
		$scope.data = data;
	}]);

starBoxController.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.phoneId = $routeParams.phoneId;
	}]);