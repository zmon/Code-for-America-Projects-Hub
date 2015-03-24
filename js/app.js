var cfahubApp = angular.module('cfahubApp', [
  'ngRoute',
  'cfahubControllers'
]);

cfahubApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        redirectTo: '/hub'
      }).
      when('/idea', {
        templateUrl: 'views/CfAideaPage.htm',
        controller: 'CfAideaPageCtrl'
      }).
      when('/project', {
        templateUrl: 'views/CfAprojectPage.htm',
        controller: 'CfAprojectPageCtrl'
      }).
      when('/project/kc', {
        templateUrl: 'views/CfAprojectPageCommunityKC.htm',
        controller: 'KCCtrl'
      }).
      when('/hub', {
        templateUrl: 'views/CfAprojectsHub.htm',
        controller: 'HubCtrl'
      }).
      when('/wrong404', {
        templateUrl: 'views/404.html',
        controller: 'wrong404Ctrl'
      }).
      otherwise({
        redirectTo: '/wrong404'
      });
  }]);