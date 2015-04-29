describe("ProjectIdeaService", function() {
  var ProjectIdeasService, $httpBackend;

  // Initialize the module before each test case
  beforeEach(module('cfahubServices'));
  // beforeEach(module(function($provide) {
  //   $provide.value('GoogleProjectIdeasService', GoogleProjectIdeasService);
  // }));

  beforeEach(inject(function(_ProjectIdeaService_, _$httpBackend_) {
    ProjectIdeaService = _ProjectIdeaService_;
    $httpBackend = _$httpBackend_;
  }));

  it("should get ProjectIdeas", function() {
    $httpBackend.whenGET("https://spreadsheets.google.com/feeds/list/1PGM2P9o0bkJ_xCkoH2ps_Dp5xnBDrPxmIB-jnJWAwhE/1/public/values?alt=json").respond({
        data: {
        // Idea data
        }
    });

    // var cards = $projectIdeas.getIdeas();
    // expect(cards.length).toBeGreaterThan 1;
  });
});
