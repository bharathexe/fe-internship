const app = angular.module("myApp", []);

app.controller("myCtrl",($scope)=>{
    $scope.name = "Bharath";
    $scope.age = 20;
    $scope.city = "Mysuru";
});