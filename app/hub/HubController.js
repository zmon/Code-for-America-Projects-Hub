cfahubControllers.controller('HubController',
    ['$scope', 'ProjectService', 'ProjectIdeaService',
      function($scope, ProjectService, ProjectIdeaService) {
    $scope.cards = {};

    ProjectService.getProjects()
        .then(function(data) {
            $scope.cards.projects = data;
            return $scope.cards.projects;
    });
    
    ProjectIdeaService.getIdeas()
        .then(function(data) {
            $scope.cards.ideas = data["App.Model.ProjectIdea"];
            return $scope.cards.ideas;
    });
}]);

cfahubControllers.controller('wrong404Ctrl', ['$scope',
    function($scope) {

}]);
