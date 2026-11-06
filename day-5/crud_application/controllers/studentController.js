app.controller("StudentController", ($scope, StudentService)=>{
  $scope.students = [];
  $scope.student = {};

  $scope.loadStudents = function(){
    StudentService.getStudents()
    .then(response => $scope.students = response.data)
    .catch(error => {
      alert("Error Loading Students: " + error.message);
      console.log("Error Loading Students: ", error);
    })
    .finally(() => console.log("Student Loading Completed!"));
  }

  $scope.saveStudent = function (){
    $scope.student.studentId = Date.now();
    StudentService.addStudent($scope.student)
    .then(() => {
      console.log("Student Added Successfully");
      $scope.student = {};
      $scope.loadStudents();
    })
    .catch(error => {
      alert("Error Adding Student: " + error.message);
      console.log("Error Adding Student: ", error.message);
    })
  }

  $scope.editStudent = function (id){
    StudentService.getStudent(id)
    .then(response => $scope.student = response.data)
    .catch(error => {
      console.log("Error Editing Student: ", error);
      alert("Error Editing Student: " + error.message);
    })
  }

  $scope.updateStudent = function (){
    StudentService.updateStudent($scope.student)
    .then(() => {
      alert("Student Updated Successfully!");
      $scope.student = {};
      $scope.loadStudents();
    })
    .catch((error) => {
      console.log("Error Updating Student: ", error);
      alert("Error Updating Student: " + error.message);
    });
  }

  $scope.deleteStudent = function(id){
    if(confirm("Are you sure you want to delete?"))
      StudentService.deleteStudent(id)
      .then(() => {
        alert("Student Deleted Successfully");
        $scope.loadStudents();
      })
      .catch(error => {
        console.log("Error Deleting Student", error);
        alert("Error Deleting Student: " + error.message);
      });
  }

  $scope.loadStudents();
});