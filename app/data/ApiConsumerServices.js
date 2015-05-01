/***
Services for fetching data from external REST APIs
***/
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

cfahubServices.factory('GithubProjectsService', GithubProjectsService);

GithubProjectsService.$inject = ['$http'];

function GithubProjectsService($http) {
    return {
      getProjects: getProjects
    };

    function getProjects() {
      return $http.get('https://api.github.com/orgs/codeforkansascity/repos')
        .success(getProjectsComplete)
        .error(getProjectsError);

      function getProjectsComplete(data, status) {
        console.log(data)
        return data;
        }

      function getProjectsError(data, status, statusText) {
        return alert(statusText);
        }
    }
}

cfahubServices.factory('GoogleProjectsService', GoogleProjectsService);

GoogleProjectsService.$inject = ['$http'];

function GoogleProjectsService($http) {
    return {
      getApprovedProjects: getApprovedProjects
    };

    function getApprovedProjects() {
      return $http.get('https://spreadsheets.google.com/feeds/worksheets/1tnW2fTcPEQG93oebrCfvjZw4Vjtn6vkzvqyovxebKlI/public/full?alt=json')
       .success(getApprovedProjectsComplete)
       .error(getApprovedProjectsError);

    function getApprovedProjectsComplete(data, status) {
        // Multiple spreadsheet rows in a single Atom <entry>
        console.log(data.feed)
        return data.feed;
      }

    function getApprovedProjectsError(data, status, statusText) {
        return alert(statusText);
        }
    }
}

cfahubServices.factory('GoogleProjectIdeasService', GoogleProjectIdeasService);

GoogleProjectIdeasService.$inject = ['$http'];

function GoogleProjectIdeasService($http) {
    return {
      getSubmittedIdeas: getSubmittedIdeas
    };

    function getSubmittedIdeas() {
      return $http.get('https://spreadsheets.google.com/feeds/list/1PGM2P9o0bkJ_xCkoH2ps_Dp5xnBDrPxmIB-jnJWAwhE/1/public/values?alt=json')
       .success(getSubmittedIdeasComplete)
       .error(getSubmittedIdeasError);

      function getSubmittedIdeasComplete(data, status) {
             // Multiple spreadsheet rows in a single Atom <entry>
             return data.feed;
        }

      function getSubmittedIdeasError(data, status, statusText) {
             return alert(statusText);
        }
    }
}
