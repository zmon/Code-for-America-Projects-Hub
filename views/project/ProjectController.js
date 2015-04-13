cfahubControllers.controller('ProjectController', function($scope, $routeParams, ProjectService) {
    var projectId = $routeParams.pid;
    $scope.project = ProjectService.getProject(projectId);
});

cfahubControllers.controller('ProjectIdeaListController', function($scope, $routeParams, ProjectIdeaService) {
    $scope.projects = $scope.ideas = ProjectIdeaService.list();
});

cfahubControllers.controller('ProjectIdeaController', function($scope, $routeParams, ProjectIdeaService) {
    var ideaId = $routeParams.iid;
    $scope.project = $scope.idea = ProjectIdeaService.getIdea(ideaId);
});

cfahubControllers.controller('ProjectListController', function($scope, $routeParams, ProjectService) {
    $scope.projects = ProjectService.list();
});