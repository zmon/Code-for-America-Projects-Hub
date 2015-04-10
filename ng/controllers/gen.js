var cfahubControllers = angular.module('cfahubControllers', []);

cfahubControllers.controller('HubCtrl', ['$scope',
    function($scope) {
}]);


cfahubControllers.controller('GitCtrl',function($scope,GithubApiDaoService){
    //$scope.items = GithubApiDaoService.getHttpItems();

    $scope.getItems=function(){
      $scope.items = GithubApiDaoService.getHttpItems();
    }
});


cfahubControllers.controller('wrong404Ctrl', ['$scope',
    function($scope){

}]);
