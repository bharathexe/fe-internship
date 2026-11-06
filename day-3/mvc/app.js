const app = angular.module("myApp", []);

const reverse = ()=>{
    // filter:arg1:arg2: seperated by , as parameters
    return function(input, uppercase){
        return uppercase ? String(input).split("").reverse().join("").toUpperCase() : String(input).split("").reverse().join("");
    }
}

// Define Filter 
app.filter("reverse", reverse);

app.controller("StudentController", ($scope)=>{
    $scope.student = {
        id: 101,
        name: "Rahul",
        age: 20,
        college: "MITM"
    }
    $scope.students = [
        "Rahul",
        "Bharath",
        "Amit"
    ];
}); 