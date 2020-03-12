const athleteProfileApp = angular.module("athleteProfileApp", ["ngRoute"]);

angular.module("athleteProfileApp").config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../public/views/basic-info.html"
      })
      .when("/about", {
        templateUrl: "../public/views/about.html"
      })
      .when("/social-media", {
        templateUrl: "../public/views/social-media.html"
      })
      .when("/list", {
        templateUrl: "../public/views/athlete-list.html"
      })
      .when("/submit", {
        templateUrl: "../public/views/submit.html"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]);

athleteProfileApp.controller("AthleteController", [
  "$scope",
  "$location",
  "$http",

  function($scope, $location, $http) {
    $scope.currentFormViewIndex = 0;

    $scope.handleFormViewChange = function(newPath) {
      $scope.currentFormViewIndex++;
      $location.path(newPath);      
    };

    $scope.sections = [
      { name: "Basic Info", path: "/" },
      { name: "About", path: "#/about" },
      { name: "Social Media", path: "#/social-media" },
      { name: "Submit", path: "#/submit" }
    ];

    $scope.athlete = {
      name: "",
      sport: "",
      nationality: "",
      gender: "",
      dateOfBirth: "",
      description: "",
      location: "",
      team: "",
      twitter: "",
      facebook: "",
      instagram: ""
    };

    $scope.postAthlete = function() {
        console.log('Yes!');
        let newAthlete = $scope.athlete;
        console.log(newAthlete)
        $http.post('/api/profile', newAthlete)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        $location.path('/list');
      };
  }
]);
