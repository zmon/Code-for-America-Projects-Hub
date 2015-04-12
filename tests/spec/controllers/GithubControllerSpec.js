describe('GithubController', function() {
  var $scope, $controller;

    // Initialize the module before each test case
    //@TODO Replace including the service here with a mock-up.
    // http://eclipsesource.com/blogs/2014/03/27/mocks-in-jasmine-tests/
    beforeEach(module('cfahubServices'));
    beforeEach(module('cfahubControllers'));

    beforeEach(inject(function(_$controller_, $rootScope) {
      scope = $rootScope.$new();
      $controller = _$controller_('GithubController', {
        $scope: scope
      });
    }));

    it('should have scope', function() {
      expect(scope).toBeDefined();
    });

    it('should have project', function() {
      expect(scope.items).toEqual == '';
     // expect(scope.items).toBeDefined();
    });
});