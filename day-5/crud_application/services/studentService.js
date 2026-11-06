app.service("StudentService", function ($http){
  const API_URL = "http://localhost:3000/students";

  this.getStudents = function (){
    return $http.get(API_URL);
  }
  this.getStudent = function (id){
    return $http.get(API_URL + "/" + id);
  }
  this.addStudent = function (student){
    return $http.post(API_URL, student);
  }
  this.updateStudent = function (student){
    return $http.put(API_URL + "/" + student.id, student);
  }
  this.deleteStudent = function (id){
    return $http.delete(API_URL + "/" + id);
  }
});