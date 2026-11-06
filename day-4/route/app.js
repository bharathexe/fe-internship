const app = angular.module("studentApp", ["ngRoute"]);

app.config(($routeProvider)=>{
  $routeProvider.when("/home", {
    templateUrl: "views/home.html"
  })
  .when("/students", {
    templateUrl: "views/students.html"
  })
  .when("/about", {
    templateUrl: "views/about.html"
  })
  .otherwise({
    redirectTo: "/home"
  })
});