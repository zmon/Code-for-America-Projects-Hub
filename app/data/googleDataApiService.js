/***
Data Access Object Model for fetching Google Spreadsheet api data
***/
/** Recommended pattern for defining services,
 *  based on https://github.com/johnpapa/angular-styleguide#factories.
 */
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
           return data.objects;
        }

        function getApprovedProjectsError(data, status, statusText) {
           return alert(statusText);
           //@TODO: add logger
           //console.log(status);

        }
    }
}
