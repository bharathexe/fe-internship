const app = angular.module("myApp", []);

app.controller("myCtrl", ($scope, $timeout)=>{
  $scope.message = "Please wait...";
  $timeout(()=>{
    $scope.message = "Welcome to AngularJS"
  }, 3000);
});