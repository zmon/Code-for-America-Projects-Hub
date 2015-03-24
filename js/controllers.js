var cfahubControllers = angular.module('cfahubControllers', []);


cfahubControllers.controller('CfAideaPageCtrl', ['$scope',
    function($scope) {
        
}]);

cfahubControllers.controller('CfAprojectPageCtrl', ['$scope',
    function($scope) {
        
}]);

cfahubControllers.controller('KCCtrl', ['$scope',
    function($scope) {
        
}]);

cfahubControllers.controller('HubCtrl', ['$scope',
    function($scope) {
        $scope.static = {
            "footer": "views/static/footer.html"
        };
}]);

cfahubControllers.controller('GitCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.items = [];
        
        $scope.getItems = function() {
         $http({method : 'GET',url : 'http://codeforamerica.org/api/organizations'})
            .success(function(data, status) {
                $scope.items = data.objects;
             })
            .error(function(data, status) {
                alert("Error");
            });
        }
        
}]);

cfahubControllers.controller('wrong404Ctrl', ['$scope',
    function($scope) {
        
}]);