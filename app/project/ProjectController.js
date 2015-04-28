cfahubControllers.controller('ProjectController', function($scope, $routeParams, ProjectService) {
    var projectId = $routeParams.pid;
    $scope.project = ProjectService.getProject(projectId);
});

cfahubControllers.controller('ProjectListController', function($scope, $routeParams, ProjectService) {
          return ProjectService.getProjects()
          .then(function(data) {
              $scope.ideas = data;
              return $scope.ideas;
      });
});