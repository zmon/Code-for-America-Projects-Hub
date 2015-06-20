var cfahubApp = angular.module('cfahubApp', [
  'ngRoute',
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
        templateUrl: 'app/hub/Hub.htm',
        controller: 'HubController'
      }).
              // Projects Idea page
      when('/ideas/:iid', {
        templateUrl: 'app/idea/Idea.htm',
        controller: 'ProjectIdeaController'
      }).
              // Projects Page
      when('/projects/:pid', {
        templateUrl: 'app/project/Project.htm',
        controller: 'ProjectController'
      }).
      when('/data', {
        redirectTo: '/cfa'
      }).
              //Sample API Data
      when('/cfa', {
        templateUrl: 'app/data/Data.html',
        controller: 'CfaController'
      }).
      when('/git', {
        templateUrl: 'app/data/Data.html',
        controller: 'GithubController'
      }).
      when('/googleprojects', {
        templateUrl: 'app/data/Data.html',
        controller: 'GoogleProjectsController'
      }).
      when('/googleprojectideas', {
        templateUrl: 'app/data/Data.html',
        controller: 'GoogleProjectIdeasController'
      }).
              //wrong page thing
      when('/wrong404', {
        templateUrl: 'app/static/404.html',
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
    });
}]);
