cfahubControllers.controller('ProjectIdeaController', function($scope, $routeParams, ProjectIdeaService) {
    var ideaId = $routeParams.iid;
    $scope.project = $scope.idea = ProjectIdeaService.getIdea(ideaId);
});