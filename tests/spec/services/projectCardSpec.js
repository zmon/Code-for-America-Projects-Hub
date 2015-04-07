describe("ProjectCard objects", function() {
  // Initialization of the AngularJS application before each test case
  beforeEach(module('cfahubApp'));

  it("should be of type ProjectCard", function() {
    var project = new cfahubApp.service('ProjectService',[]);
    expect(project.projectCard).toBe(projectCard);
  });
});
