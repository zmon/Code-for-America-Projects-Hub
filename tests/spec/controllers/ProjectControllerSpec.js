describe('ProjectController', function() {
  var $scope, $controller;

    // Initialize the module before each test case
    //@TODO Replace including the service here with a mock-up.
    // http://eclipsesource.com/blogs/2014/03/27/mocks-in-jasmine-tests/
    beforeEach(module('cfahubServices'));
    beforeEach(module('cfahubControllers'));

    beforeEach(inject(function(_$controller_, $rootScope) {
      scope = $rootScope.$new();
      $controller = _$controller_('ProjectController', {
        $scope: scope,
        $routeParams: {id: '0'}
      });
    }));

    it('should have scope', function() {
      expect(scope).toBeDefined();
    });
});


//  beforeEach(function() {
//    var controller;
//    $scope = {}
//    controller = $controller('projectCtrl',  { $scope: $scope });
//  });
//
//  it ('returns projectCtrl', function() {
//    expect(controller).toBeUndefined();
//  });
//
//  describe('$scope.cards', function() {
//    it ('returns projectCards', function() {
//      expect($scope.cards.length()).toBeGreaterThan(1);
//    });
//        
//    it('returns the first projectCard', function() {
//      expect($scope.cards[0].title).toEqual('Project');
//    });
//  });

// Example for testing webservice
// describe('Unit: Testing Project Controller', function() {
//     var scope, controller, httpBackend;
// 
//     // Initialization of the AngularJS application before each test case
//     beforeEach(angular.mock.module('cfahubApp'));
// 
//     // Injection of dependencies, $http will be mocked with $httpBackend
//     beforeEach(inject(function($rootScope, $controller, $httpBackend) {
//         scope = $rootScope;
//         controller = $controller;
//         httpBackend = $httpBackend;
//     }));

//     it('should query the webservice', function() {
// 
//         // Which HTTP requests do we expect to occur, and how do we respond?
//         httpBackend.expectGET('/projects').respond('[{"title": "Project1"}, {"title": "Project2"}]');
// 
//         // Starting the controller
//         controller('projectCtrl', {'$scope': scope });
// 
//         // Respond to all HTTP requests
//         httpBackend.flush();
// 
//         // Triggering the AngularJS digest cycle in order to resolve all promises
//         scope.$apply();
// 
//         // We expect the controller to put the right value onto the scope
//         expect(scope.firstProject).toEqual('Project1');
// 
//     });

