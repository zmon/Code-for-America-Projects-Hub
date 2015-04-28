cfahubServices.factory('CFAProjectsService', CFAProjectsService);

CFAProjectsService.$inject = ['$http'];

function CFAProjectsService($http) {
    return {
      getProjects: getProjects
    };

    function getProjects() {
      return $http.get('http://codeforamerica.org/api/organizations/Code-for-Kansas-City/projects')
       .success(getProjectsComplete)
       .error(getProjectsError);

       function getProjectsComplete(data, status) {
           return data.objects;
        }

        function getProjectsError(data, status, statusText) {
           return alert(statusText);
           //@TODO: add logger
           //console.log(status);

        }
    }
}