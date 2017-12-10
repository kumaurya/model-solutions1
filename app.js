(function () {
'use strict';

angular.module('listItemsapp', [])
.controller('listItemsController', listItemsController);

MsgController.$inject = ['$scope'];
function listItemsController($scope) {
  $scope.listItems = "";


  $scope.totalItems = function () {
    $scope.itemsNames  = $scope.listItems.split(',');
    $scope.result = displaystatus($scope.itemsNames);
    }

function displaystatus(itemsNames) {
  $scope.ItemCount = itemsNames.length;

    switch ($scope.ItemCount) {
      case 0 :
          alert("Please enter data First");
        break;
      case 1 :
          alert("Enjoy");
        break;
      case 2 :
          alert("Enjoy");
        break;
      case 3 :
          alert("Enjoy");
        break;
      default:
         alert("Too Much");;
  }

}
  };


})();
