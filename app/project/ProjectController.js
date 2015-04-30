cfahubControllers.controller('ProjectController', function($scope, $routeParams, ProjectService) {
    var projectId = $routeParams.pid;
    return ProjectService.getProject(projectId)
    .then(function(data) {
        $scope.project = data;
        return $scope.project;
    });
});

cfahubControllers.controller('ProjectListController', function($scope, $routeParams, ProjectService) {
    return ProjectService.getProjects()
    .then(function(data) {
        $scope.projects = data;
        return $scope.projects;
    });
});