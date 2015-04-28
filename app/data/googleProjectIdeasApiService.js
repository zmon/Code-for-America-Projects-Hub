/***
Data Access Object Model for fetching Google Spreadsheet api data
***/
/** This is the recommended pattern for defining services,
 *  based on https://github.com/johnpapa/angular-styleguide#factories.
 */
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
           return data;
        }

        function getSubmittedIdeasError(data, status, statusText) {
           return alert(statusText);
           //@TODO: add logger
           //console.log(status);

        }
    }
}
