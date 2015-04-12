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
      when('/', {
        redirectTo: '/hub'
      }).
      when('/ideas/:iid', {
        templateUrl: 'views/pages/Idea.htm',
        controller: 'ProjectIdeaController'
      }).
      when('/projects/:pid', {
        templateUrl: 'views/pages/Project.htm',
        controller: 'ProjectController'
      }).
      when('/hub', {
        templateUrl: 'views/pages/Hub.htm',
        controller: 'HubController'
      }).
      when('/coa', {
        templateUrl: 'views/pages/Data.html',
        controller: 'CoaController'
      }).
      when('/git', {
        templateUrl: 'views/pages/Data.html',
        controller: 'GithubController'
      }).
      when('/googleprojects', {
        templateUrl: 'views/pages/Data.html',
        controller: 'GoogleProjectsController'
      }).
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