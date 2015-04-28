cfahubControllers.controller('HubController', 
    ['$scope', 'ProjectService', 'ProjectIdeaService', 
      function($scope, ProjectService, ProjectIdeaService) {
    $scope.cards = {};
    $scope.cards.projects = ProjectService.list();
    
    ProjectIdeaService.getIdeas()
        .then(function(data) {
            $scope.cards.ideas = data["App.Model.ProjectIdea"];
            return $scope.cards.ideas;
    });
}]);

cfahubControllers.controller('wrong404Ctrl', ['$scope',
    function($scope) {
        
}]);