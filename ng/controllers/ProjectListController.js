cfahubControllers.controller('ProjectListController', function($scope, $routeParams, ProjectService) {
    $scope.projects = ProjectService.list();
});