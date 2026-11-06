const app = angular.module("studentApp", []);

app.service("StudentService", function(){
  this.getStudentCount = function (students){
    return students.length;
  }
});

app.filter("upperCustom", function (){
  return function(input){
    if(!input) return "";
    return String(input).toUpperCase();
  }
});

app.controller("StudentController", ($scope, StudentService, $log)=>{
  $scope.students = [
    { name: "Max Verstappen", course: "C++", id: 1, fee: 10000, joined: new Date(2021, 12, 12) },
    { name: "Bharath", course: "C", id: 2, fee: 80000, joined: new Date(2021, 11, 12) }
  ];

  $scope.totalStudents = StudentService.getStudentCount($scope.students);

  $scope.searchText = "";

  $log.info("Student Application");
});