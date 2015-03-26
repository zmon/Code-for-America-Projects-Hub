var cfahubApp = angular.module('cfahubApp', [
  'ngRoute',
  'cfahubControllers',
  'leaflet-directive'
]);

cfahubApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        redirectTo: '/hub'
      }).
      when('/idea', {
        templateUrl: 'views/pages/Idea.htm',
        controller: 'CfAideaPageCtrl'
      }).
      when('/projects/:pid', {
        templateUrl: 'views/pages/Project.htm',
        controller: 'CfAprojectPageCtrl'
      }).
      when('/project/kc', {
        templateUrl: 'views/pages/CfAprojectPageCommunityKC.htm',
        controller: 'KCCtrl'
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