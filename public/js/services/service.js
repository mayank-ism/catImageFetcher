/*global angular*/
/*global console*/

var imageService = angular.module('imageServices', []);
var url = "/images/";

imageService.factory('ImageService', function ($http, $q) {
  var imageSourceList = [];
  var fetchImages = function(pageNumber) {
    var deferred = $q.defer();

    $http.get(url + pageNumber)
      .then(function successCallback(response) {
        var objArray = response.data.images;
        imageSourceList = imageSourceList.concat(objArray.map(function(data){
            return data.display_sizes[0].uri;
          }
        ));
        deferred.resolve();
      }, function errorCallback(error) {
        console.log("Error: " + error);
        deferred.reject();
      });

    return deferred.promise;
  };

  var getImageList = function() {
    return imageSourceList;
  };

  return {
    fetchImages : fetchImages,
    getImageList : getImageList
  };
});
