// Controllers for displaying sample results from external REST APIs

cfahubControllers.controller('CfaController',function($scope, CFAProjectsService) {
      $scope.getItems = function() { 
        return CFAProjectsService.getProjects()
        .then(function(response){$scope.items = response.data.objects})
      };
});

cfahubControllers.controller('GithubController',function($scope, GithubProjectsService) {
      $scope.getItems = function() {
        return GithubProjectsService.getProjects()
        .then(function(response){$scope.items = response.data})
      };
});

cfahubControllers.controller('GoogleProjectsController',function($scope, GoogleProjectsService) {
      $scope.getItems = function() {
        return GoogleProjectsService.getApprovedProjects()
        .then(function(response){$scope.items = response.data})
      };
});

cfahubControllers.controller('GoogleProjectIdeasController',function($scope, GoogleProjectIdeasService) {
      $scope.getItems = function() {
        return GoogleProjectIdeasService.getSubmittedIdeas()
        .then(function(response){$scope.items = response.data})
      };
});