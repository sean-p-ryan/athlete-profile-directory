const athleteProfileApp = angular.module('athleteProfileApp', ['ngRoute']);

athleteProfileApp.config([
  $routeProvider,
  function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "./home.html"
      })
      .otherwise({
        redirectTo: "/home"
      });
  }
]);

athleteProfileApp.controller("AthleteController", [
  "$scope",
  function($scope) {
    $scope.message = "hey there";

    $scope.ninjas = [
      {
        name: "Yoshi",
        belt: "green"
      },
      {
        name: "Crystal",
        belt: "yellow"
      },
      {
        name: "Ryu",
        belt: "orange"
      },
      {
        name: "Sean",
        belt: "black"
      }
    ];

    $scope.sections = [
      "Basic Info",
      "About",
      "Social Media",
      "Summary",
      "Submit"
    ];
  }
]);
