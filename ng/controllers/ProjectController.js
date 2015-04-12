cfahubControllers.controller('ProjectController', function($scope, $routeParams, ProjectService) {
    var projectId = $routeParams.pid;
    $scope.project = ProjectService.getProject(projectId);
});