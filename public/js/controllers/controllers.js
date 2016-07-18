/*global angular*/
var imageControllers = angular.module('imageControllers', []);

imageControllers.controller('imageController', function ($scope, ImageService) {
  var pageNumber = 1;
  
  function populateImages() {
    ImageService.fetchImages(pageNumber)
      .then(function() {
        $scope.imageURLs = ImageService.getImageList();
      });
  }

  $scope.getMoreData = function() {
    pageNumber++;
    populateImages();
  }
});
