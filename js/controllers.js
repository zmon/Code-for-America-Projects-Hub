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

cfahubControllers.controller('projectCardCtrl', ['$scope',
    function($scope) {
        $scope.cards = [{
                "image":"images/OK_placeholder_project_image.png",
                "city":"Project City",
                "title":"Project Title",
                "subtitle":"Project Subtitle",
                "category":"Civic category",
                "goals":"The first paragraph from GitHb readme. Project goals. One paragraph of text describing why people need to use this app/website. The first four lines of text are displayed in the card view. The rest is available in details.",
                "stars":"#",
                "followers":"#",
                "comments":"#",
                "active":"Not online yet",
                "platform":"platform",
                "techstack":"technology stack",
                "url":"https://github.com/codeforkansascity/civic-project-mapping",
                "issues":[{"id":"30","descrip":"links to issues on GitHub where the help is wanted"}]
        },
    {
                "image":"https://cloud.githubusercontent.com/assets/10410203/6736267/bd3309ac-ce31-11e4-905b-aef21486975f.png",
                "city":"Kansas City",
                "title":"Community KC",
                "subtitle":"Map of projects funded by Community Capital Fund",
                "category":"Community",
                "goals":"The Community Capital Fund and our partners have realized through our work that a map of existing community-based projects does not exist and that often, neighborhood associations and organizations are not aware of projects/programs occurring near them, and often do not know of other organizations doing similar work. CCF believes that neighborhoods that partner with and learn from others doing similar work will have greater capacity, opportunities, and resources to carry out their work; will have a greater impact on community development and revitalization than when working in a silo; and will have a more sustained, long-term impact.",
                "stars":"1",
                "followers":"7",
                "comments":"0",
                "active":"Online",
                "platform":"Web App",
                "techstack":"JavaScript, HTML, CSS",
                "url":"https://github.com/codeforkansascity/civic-project-mapping",
                "issues":[{"id":"58","descrip":"Organizations with multiple locations, what is the best way to input and display."},
                    {"id":"56","descrip":"When there are to many pins on the map, cluster them."},
                    {"id":"54","descrip":"Consider BootLeaf"},
                    {"id":"52","descrip":"Make it easier to change the Question Labels"},
                    {"id":"31","descrip":"Test usage on phones"},
                    {"id":"29","descrip":"Search by project name"},
                    {"id":"27","descrip":"Usability/Interaction Design/Visual Design/Information Architecture"},
                    {"id":"26","descrip":"Update About page"},
                    {"id":"24","descrip":"Add neighborhood names on the map."},
                    {"id":"20","descrip":"satellite/earth view/street view"},
                    {"id":"14","descrip":"Add a project detail page"}]
        }];
}]);

cfahubControllers.controller('HubCtrl', ['$scope',
    function($scope) {
        
}]);

cfahubControllers.controller('GitCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.items = [];
        
        $scope.getItems = function() {
         $http({method : 'GET',url : 'http://codeforamerica.org/api/organizations/Code-for-Kansas-City/projects'})
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