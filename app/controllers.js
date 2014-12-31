var starBoxController = angular.module('starBoxController', []);

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

starBoxController.controller('MainPageCtrl', ['$scope', '$http',
	function ($scope, $http) {
		var data = [];
		for (var i = 0, l= 20; i<l; i++) {
			var images = ["../mock-assets/janna50.png", "../mock-assets/chogath50.png", "../mock-assets/gilbert50.png"]
			var authors = ["Janna", "Cho'Gath", "Gilbert"];
			var titles = ["Blizzard Rained Upon Us","I Swallow Your Death", "NOMNOMNOM"];
			data.push({
				image: images[i%3],
				author: authors[i%3],
				title: titles[i%3],
				date: randomDate(new Date(2012, 0, 1), new Date()).toUTCString(),
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo ultricies commodo. Aliquam ut ipsum ante. Suspendisse commodo tempor lacus, id fringilla metus ultricies non. Donec sodales augue magna, eget viverra libero aliquet id. Mauris ut elementum mauris, nec luctus nibh. Mauris finibus rhoncus urna, vel ullamcorper neque tincidunt eget. Pellentesque et elit ex. Nunc at elementum enim. Pellentesque mattis euismod felis et elementum. Ut vestibulum egestas mi, a consectetur tellus mattis a. Aenean ante lorem, finibus sit amet molestie eget, varius ac odio. Maecenas nunc lorem, suscipit sed pretium vitae, ornare a leo. Nunc hendrerit ultricies libero in eleifend. "
			});
		}
		$scope.data = data;
	}]);

starBoxController.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.phoneId = $routeParams.phoneId;
	}]);