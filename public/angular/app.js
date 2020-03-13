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

    $scope.handleFormViewChange = function(newPath) {
      $location.path(newPath);           
    };

    $scope.listViewDisplay = false;
    $scope.addViewDisplay = true;    

    $scope.changeViewClasses = function() { 
        console.log($scope.activeFormSection)               
        if ($location.$$path === '/list'){
            $scope.listViewDisplay = true; 
            $scope.addViewDisplay = false; 
        } else {
            $scope.listViewDisplay = false;
            $scope.addViewDisplay = true; 
        }        
    }

    $scope.addActiveFormSection = function(path) {
        console.log('hi')
        console.log(path)
        console.log($location.$$path)
        return path === $location.$$path;
    }

    $scope.sections = [
      { name: "Basic Info", path: "/" },
      { name: "About", path: "/about" },
      { name: "Social Media", path: "/social-media" },
      { name: "Submit", path: "/submit" }
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
        let newAthlete = $scope.athlete;        
        $http.post('/api/profile', newAthlete)
        .then(res => {
            console.log(res)
            $scope.getAthletes();
        })
        .catch(err => {
            console.log(err)
        })
        $location.path('/list');
      };    

    $scope.getAthletes = function() {        
        $http.get('api/profiles').success(data => {            
            $scope.allAthletes = data        
        })        
    }
  }
]);
