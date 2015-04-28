//@TODO Not sure how much we actually
// need controllers for these APIs.

cfahubControllers.controller('CfaController',function($scope, CFAProjectsService) {
      $scope.getItems = function() {
        $scope.items = CFAProjectsService.getHttpItems();
      };
});

cfahubControllers.controller('GithubController',function($scope, GithubProjectsService) {
      $scope.getItems = function() {
        $scope.items = GithubProjectsService.getHttpItems();
      };
});

cfahubControllers.controller('GoogleProjectsController',function($scope, GoogleProjectsService) {
      $scope.getItems = function() {
        $scope.items = GoogleProjectsService.getApprovedProjects();
      };
});

cfahubControllers.controller('GoogleIdeasController',function($scope, GoogleProjectIdeasService) {
      $scope.getItems = function() {
        $scope.items = GoogleProjectIdeasService.getSubmittedIdeas();
      };
});
