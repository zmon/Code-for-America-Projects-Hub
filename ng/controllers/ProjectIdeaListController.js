cfahubControllers.controller('ProjectIdeaListController', function($scope, $routeParams, ProjectIdeaService) {
    $scope.projects = $scope.ideas = ProjectIdeaService.list();
});