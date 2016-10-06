angular.module("routerApp")
.controller("homeCtrl", function($scope, mainServ){
  $scope.name = mainServ.name;
  // $scope.name = "Lance";
});



// even though you ahve two different values because you ahave.name used in two different ocntrollers but since we put homeCtrl in our parameters in the homeCTRL.js file it will use lance instead
