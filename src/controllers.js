/*jslint white: true, browser: true, devel: true, windows: true, forin: true, vars: true, nomen: true, plusplus: true, bitwise: true, regexp: true, sloppy: true, indent: 4, maxerr: 50 */

// Function closure or you're a noob
(function () {
    // Throws exceptions on un-safe practices
    "use strict";
    var starBoxController = angular.module('starBoxController', [])
        .directive("imageCarouselDirective", function() {
            return function(scope, element, attributes) {
                if(scope.$last) {
                    // Small delay before sending out the event
                    // to accommodate for the last iteration
                    setTimeout(function () {
                        scope.$emit('lastimageloaded');      
                    }, 0);
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
            var images = [], imagesx = [], i = 0, l = 4;
            var headers = ["Atlantica Released!!!", "PATCH - Chase Them To The Skies!", "The Apocalypse!", "Spaceships Are Attacking Us!"];
            for(i; i < l; i++) {
                images.push({
                    image: "../assets/images/image" + (i+1) + ".jpg",
                    header: headers[i],
                    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas" 
                });
                imagesx.push({
                    image: "../assets/images/image" + (i+1) + "x.jpg",
                    header: headers[i],
                });
            }
            
            $scope.images = images;
            $scope.imagesx = imagesx;
                                    
            // Dynamically populate entries
            $http.get('../data/january/entries.json').success(function(data) {
                $scope.entries = data.entries;
            });
        }]);
})();