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
        templateUrl: 'views/pages/CfAideaPage.htm',
        controller: 'CfAideaPageCtrl'
      }).
      when('/project', {
        templateUrl: 'views/pages/CfAprojectPage.htm',
        controller: 'CfAprojectPageCtrl'
      }).
      when('/project/kc', {
        templateUrl: 'views/pages/CfAprojectPageCommunityKC.htm',
        controller: 'KCCtrl'
      }).
      when('/hub', {
        templateUrl: 'views/pages/CfAprojectsHub.htm',
        controller: 'HubCtrl'
      }).
      when('/git', {
        templateUrl: 'views/pages/GithubData.html',
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