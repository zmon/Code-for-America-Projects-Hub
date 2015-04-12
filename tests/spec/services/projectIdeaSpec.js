describe("ProjectIdeaService", function() {
  var $projectIdeas;
  // Initialize the module before each test case
  beforeEach(module('cfahubServices', function($provide) {
    gsApi = {};
    // Add some mock data from Google Spreadsheet API
    gsApi.projects = [];
    gsApi.projects[0] = {};
    gsApi.projects[0].title = "Project Title";
    $provide.value('gsApi', gsApi);
  }));

  beforeEach(inject(function(ProjectIdeaService) {
    $projectIdeas = ProjectIdeaService;
  }));

  it("should list ProjectIdeas", function() {
    var cards = $projectIdeas.list();
    expect(cards[0].projecttype).toEqual("idea");
  });

  it("should get an idea from gsApi", function() {

  });
});
