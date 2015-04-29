cfahubControllers.controller('ProjectIdeaListController', function($scope, $routeParams, ProjectIdeaService) {
          return ProjectIdeaService.getIdeas()
          .then(function(data) {
              $scope.ideas = data["App.Model.ProjectIdea"];
              return $scope.ideas;
      });
});

cfahubControllers.controller('ProjectIdeaController', function($scope, $routeParams, ProjectIdeaService) {
    var ideaId = $routeParams.id;
      return ProjectIdeaService.getIdea(ideaId)
          .then(function(data) {
          	console.log(data)
              $scope.project = $scope.idea = data;
              return $scope.project;
      });
});