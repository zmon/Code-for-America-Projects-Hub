var cfahubApp = angular.module('cfahubApp', [
  'ngRoute',
  'ngSanitize',
  'cfahubServices',
  'cfahubControllers',
  'leaflet-directive'
]);

cfahubApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
              // Main landing page, THE HUB
      when('/', {
        redirectTo: '/hub'
      }).
      when('/hub', {
        templateUrl: 'views/pages/Hub.htm',
        controller: 'HubController'
      }).
              // Projects Idea page
      when('/ideas/:iid', {
        templateUrl: 'views/pages/Idea.htm',
        controller: 'ProjectIdeaController'
      }).
              // Projects Page
      when('/projects/:pid', {
        templateUrl: 'views/pages/Project.htm',
        controller: 'ProjectController'
      }).
              //API Grabbers
      when('/cfa', {
        templateUrl: 'views/pages/Data.html',
        controller: 'CfaController'
      }).
      when('/git', {
        templateUrl: 'views/pages/Data.html',
        controller: 'GithubController'
      }).
      when('/googleprojects', {
        templateUrl: 'views/pages/Data.html',
        controller: 'GoogleProjectsController'
      }).
      when('/googleprojectideas', {
        templateUrl: 'views/pages/Data.html',
        controller: 'GoogleIdeasController'
      }).
              //wrong page thing
      when('/wrong404', {
        templateUrl: 'views/404.html',
        controller: 'wrong404Ctrl'
      }).
      otherwise({
        redirectTo: '/wrong404'
      });
  }]);

var cfahubControllers = angular.module('cfahubControllers', []);
var cfahubServices = angular.module('cfahubServices', []);

// After all modules are loaded, watch for route changes,
// make controller name accessible as $scope.app_location_path.
cfahubApp.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
      $rootScope.app_location_path = $location.path().replace(/^\//, '');
      // Get all URL parameter
      // console.log($location.path());
    });
}]);