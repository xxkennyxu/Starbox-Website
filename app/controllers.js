/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

// Function closure or you're a noob
(function () {
    // Throws exceptions on un-safe practices
    "use strict";
    var starBoxController = angular.module('starBoxController', [])
        .directive("imageCarouselDirective", function() {
            return function(scope, element, attributes) {
                if(scope.$last) {
                    scope.$emit('lastimageloaded');   
                }
            };
        })
        .directive("slickifyDirective", function() {
            return function(scope, element, attributes) {
                scope.$on('lastimageloaded', function (event) {
                    // Slickify here
                     $('.main-image-show').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        asNavFor: '.main-image-nav'
                    });
                    $('.main-image-nav').slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        asNavFor: '.main-image-show',
                        dots: true,
                        centerMode: true,
                        focusOnSelect: true
                    });
                });
            };
        });   
        
        
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    starBoxController.controller('MainPageCtrl', ['$scope', '$http',
        function ($scope, $http) {
            var data = [], i = 0, l = 20;
                var images = ["../picture%20assets/janna50.png", "../picture%20assets/chogath50.png", "../picture%20assets/gilbert50.png"];
                var authors = ["Janna", "Cho'Gath", "Gilbert"];
                var titles = ["Blizzard Rained Upon Us", "I Swallow Your Death", "NOMNOMNOM"];
            for (i; i < l; i++) {
                data.push({
                    image: images[i % 3],
                    author: authors[i % 3],
                    title: titles[i % 3],
                    date: randomDate(new Date(2012, 0, 1), new Date()).toUTCString(),
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo ultricies commodo. Aliquam ut ipsum ante. Suspendisse commodo tempor lacus, id fringilla metus ultricies non. Donec sodales augue magna, eget viverra libero aliquet id. Mauris ut elementum mauris, nec luctus nibh. Mauris finibus rhoncus urna, vel ullamcorper neque tincidunt eget. Pellentesque et elit ex. Nunc at elementum enim. Pellentesque mattis euismod felis et elementum. Ut vestibulum egestas mi, a consectetur tellus mattis a. Aenean ante lorem, finibus sit amet molestie eget, varius ac odio. Maecenas nunc lorem, suscipit sed pretium vitae, ornare a leo. Nunc hendrerit ultricies libero in eleifend. "
                });
            }
            $scope.data = data;
            
            var images = [], i = 0, l = 4;
            var headers = ["Atlantica Released!!!", "PATCH - Chase Them To The Skies!", "The Apocalypse!", "Spaceships Are Attacking Us!"];
            for(i; i < l; i++) {
                images.push({
                    image: "../picture%20assets/image" + (i+1) + ".png",
                    header: headers[i],
                    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas" 
                });   
            }
            
            $scope.images = images;
            
        }]);

    starBoxController.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            $scope.phoneId = $routeParams.phoneId;
        }]);
    

})();