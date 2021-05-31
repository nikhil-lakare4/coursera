(
  function(){
    'use strict';

    angular.module("LunchCheck", [])

    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope){

      $scope.name = "";
      $scope.message = "";
      $scope.color = ""
      $scope.checkLunch = function(){

        if($scope.name.length == 0){
          $scope.message = "Please enter data first";
          $scope.color = "red"
          return;
        }

        var lunchMenuCount = calculateLunchItems($scope.name);

        if(lunchMenuCount <= 3){
          $scope.message = "Enjoy!";
          $scope.color = "green"
        }else{
          $scope.message = "Too much!";
          $scope.color = "green"
        }

      };

      function calculateLunchItems(lunchMenu){
        var dishes = lunchMenu.split(",");
        var arrLen = dishes.length;
        var count = 0;
        for(var i = 0; i < arrLen; i++){
          if(dishes[i].trim().length != 0){
            count = count + 1;
          }
        }
        console.log(count);
        return count;
      }
      
    }

  } 
)();