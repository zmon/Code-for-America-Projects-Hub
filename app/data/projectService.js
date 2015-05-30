cfahubServices.factory('ProjectService', ProjectService);

ProjectService.$inject = ['CFAProjectsService', 'GithubProjectsService', 'GoogleProjectsService'];

function ProjectService(CFAProjectsService, GithubProjectsService, GoogleProjectsService) {
    return {
        getProjects: getProjects,
        getProject: getProject
    };

    function getProjects() {
        var projects = [];

        return GoogleProjectsService.getApprovedProjects()
            .then(function (data) {
                projects.push(data.data);
                return CFAProjectsService.getProjects();
            })

            .then(function (data) {
                projects.push(data.data.objects);
                projects = [mergeServices(projects, 'github_html_url', 'code_url')];
                return GithubProjectsService.getProjects();
            })
            .then(function (data) {
                projects.push(data.data);
                projects = mergeServices(projects, 'github_html_url', 'html_url');

                return projects;
            });

        function mergeServices(data, ikey, kkey) {

            for (var i = 0, iLen = data[0].length; i < iLen; i++) {                     // For each of the projects to display

                var value = data[0][i][ikey];

                for (var k = 0, kLen = data[1].length; k < kLen; k++) {                 // See if it is in the data to merge

                    if (data[1][k][kkey] == value) {                                    // If it is found, then merge the data
                        data[0][i] = angular.extend({}, data[0][i], data[1][k]);
                        k = kLen;

                        break;
                    }
                }

                data[0][i].id = i + 1;

            }
            return data[0];
        }
    }

    function getProject(projectId) {
        var projects, project;
        return getProjects().then(function (data) {
            projects = data;
            for (i = 0; i < projects.length; i++) {
                project = projects[i];
                if (project['id'] == projectId) {
                    return project;
                }
            }
            return project;
        });
    }

};
