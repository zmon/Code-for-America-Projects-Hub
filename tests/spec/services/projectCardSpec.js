describe("ProjectCardService", function() {
  var $projectCards;
  // Initialize the module before each test case
  beforeEach(module('cfahubServices', function($provide) {
    cfaApi = {};
    // Add some mock data from Code for America API
    cfaApi.projects = [];
    cfaApi.projects[0] = {};
    cfaApi.projects[0].title = "Project Title";
    $provide.value('cfaApi', cfaApi);
  }));

  beforeEach(inject(function(ProjectCardService) {
    $projectCards = ProjectCardService;
  }));

  it("should list ProjectCards", function() {
    var cards = $projectCards.list();
    expect(cards[0].projecttype).toEqual("project");
  });

  it("should assemble a card from cfaApi", function() {

  });
});
