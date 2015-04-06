var cfahubApp = angular.module('cfahubApp', [
  'ngRoute',
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
        templateUrl: 'views/pages/Project.htm',
        controller: 'projectCtrl'
      }).
      when('/projects/:pid', {
        templateUrl: 'views/pages/Project.htm',
        controller: 'projectCtrl'
      }).
      when('/hub', {
        templateUrl: 'views/pages/Hub.htm',
        controller: 'HubCtrl'
      }).
      when('/git', {
        templateUrl: 'views/pages/Data.html',
        controller: 'GitCtrl'
      }).
      when('/wrong404', {
        templateUrl: 'views/404.html',
        controller: 'wrong404Ctrl'
      }).
      otherwise({
        redirectTo: '/wrong404'
      });
  }]);
