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
      when('/ideas', {
        templateUrl: 'views/pages/ideas.htm',
        controller: 'CfAideaPageCtrl'
      }).
      when('/projects', {
        templateUrl: 'views/pages/projects.htm',
        controller: 'CfAprojectPageCtrl'
      }).
      when('/projects/kc', {
        templateUrl: 'views/pages/CfAprojectPageCommunityKC.htm',
        controller: 'KCCtrl'
      }).
      when('/hub', {
        templateUrl: 'views/pages/hub.htm',
        controller: 'HubCtrl'
      }).
      when('/git', {
        templateUrl: 'views/pages/data.html',
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
