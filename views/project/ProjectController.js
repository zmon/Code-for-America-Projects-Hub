cfahubControllers.controller('ProjectController', function($scope, $routeParams, ProjectService) {
    var projectId = $routeParams.pid;
    $scope.project = ProjectService.getProject(projectId);
});

cfahubControllers.controller('ProjectIdeaListController', function($scope, $routeParams, ProjectIdeaService) {
          return ProjectIdeaService.getIdeas()
          .then(function(data) {
              $scope.ideas = data["App.Model.ProjectIdea"];
              return $scope.ideas;
      });
});

cfahubControllers.controller('ProjectIdeaController', function($scope, $routeParams, ProjectIdeaService) {
    var ideaId = $routeParams.id;
    $scope.project = $scope.idea = ProjectIdeaService.getIdea(ideaId);
});

cfahubControllers.controller('ProjectListController', function($scope, $routeParams, ProjectService) {
    $scope.projects = ProjectService.list();
});