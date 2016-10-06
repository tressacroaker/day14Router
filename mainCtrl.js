angular.module("routerApp")
.controller("mainCtrl", function($scope, mainServ){
// scope allows use two way bindng to the view
// $scope.test = mainServ.name;
$scope.name = "Nick";
// if you want to put it in the index after the a tag, then nick will pop up,

// the main controle between the two controllers is talking through the service. could also use $routeScope but not recommended


});
