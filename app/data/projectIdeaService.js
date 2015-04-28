/*
 * /view/project/projectideasService.js
 */
cfahubServices.factory('ProjectIdeaService', ProjectIdeaService);

ProjectIdeaService.$inject = ['GoogleProjectIdeasService'];

function ProjectIdeaService(GoogleProjectIdeasService) {
  return {
    getIdeas: getIdeas,
    getIdea: getIdea,
    searchIdeas: searchIdeas,
    pageIdeas: pageIdeas
  };

  function getIdeas() {
    var ideas, count, mypromise;
    /*
    *A hack to add primary keys to rows from a Google Sheet.
    *We create an array to loop while:
    *  1.  Renaming attributes in the JSON feed.
    *  2.  Converting the timestamp to a float that 
    *      we use as PK in memory.
    */

    /** This is the recommended pattern for calling services that
     *  return a promise, i.e. take advantage of the promise.
     *  based on https://github.com/johnpapa/angular-styleguide#factories.
     */

    /**
       * Request data from the service and wait for the promise
       */
     return GoogleProjectIdeasService.getSubmittedIdeas()
      .then(function(data) {
        /** Set the data and resolve the promise **/
        ideas = transformIdeas(data.data.feed.entry);
        console.log(ideas);
        return ideas;
      });

    function transformIdeas(tempIdeas) {
    count = tempIdeas.length;
    var ideasJson = "{\"App.Model.ProjectIdea\":[";
    for (i = 0; i < tempIdeas.length; i++) {
    if(i==0)
	   {
           ideasJson += "{";
	   }
       else
	   {
           ideasJson += ",{";
 	   }
       var id = new Date(tempIdeas[i]['gsx$timestamp']['$t']).valueOf();
       ideasJson += "\"id\":\"" + id + "\",";
       ideasJson += "\"timestamp\":\"" + tempIdeas[i]['gsx$timestamp']['$t']  + "\",";
       ideasJson += "\"title\":\"" + tempIdeas[i]['gsx$giveyourideaatitle']['$t']  + "\",";
       ideasJson += "\"subtitle\":\"" + tempIdeas[i]['gsx$giveyourideaasubtitle']['$t']  + "\",";
       ideasJson += "\"location\":\"" + tempIdeas[i]['gsx$location']['$t']  + "\",";
       ideasJson += "\"email_address\":\"" + tempIdeas[i]['gsx$whatisyouremailaddress']['$t']  + "\",";
       ideasJson += "\"civic_engagement_area\":\"" + tempIdeas[i]['gsx$whatareaofcivicengagementdescribesyourideathebest']['$t']  + "\",";
       ideasJson += "\"civic_request\":\"" + tempIdeas[i]['gsx$civicrequest']['$t']  + "\",";
       ideasJson += "\"organization_name\":\"" + tempIdeas[i]['gsx$nameoftheorganization']['$t']  + "\",";
       ideasJson += "\"github_url\":\"" + tempIdeas[i]['gsx$heyihaveaprojectrepoongithubalreadyhereisthelink']['$t']  + "\",";
       ideasJson += "\"target_audiences\":\"" + tempIdeas[i]['gsx$targetaudience']['$t']  + "\",";
       ideasJson += "\"user_stories\":\"" + tempIdeas[i]['gsx$userstory']['$t']  + "\",";
       ideasJson += "\"maintenance_plan\":\"" + tempIdeas[i]['gsx$maintenanceplan']['$t']  + "\",";
       ideasJson += "\"potential_blockers\":\"" + tempIdeas[i]['gsx$potentialblockers']['$t']  + "\"";   //no trailing comma
       ideasJson += "}";

    	}
      ideasJson += "]}";
      ideas = JSON.parse(ideasJson);
      return ideas;
    }
  }

	function searchIdeas(searchCriteria) {
		var foundRecords = [];
		var foundRecordCount = 0;
		var recordCount = getIdeas.length;
		for(i =0; i < recordCount; i++)
		{
        	if(ideas['App.Model.ProjectIdea'][i]['title'].toLower().contains(searchCriteria.toLower()))
      		{
      			foundRecords[foundRecordCount] = ['App.Model.ProjectIdea'][i];
      			foundRecordCount++;
      		}
		}
		return foundRecords;
	}//end search

  function getIdea(ideaId) {
    for(i=0;i<count;i++) {
     	//I think we have to do it like this...
     	if(ideas['App.Model.ProjectIdea'][i]['id']==ideaId)
   		{
   			return ideas[i];
   		}
    }
    return null;
  }//end getIdea

  function pageIdeas(pageNumber) {
  	var pageSize = 6;
  	var ideasIndex = pageNumber * pageSize;
  	var endIndex = ideasIndex + pageSize;
  	var records=[];
  	var recordsIndex = 0;
  	while(index < endIndex) {
  		record[recordsIndex] = ideas[ideasIndex];
  		index++;
  		recordsIndex++;
    }
    return records;
  }//end pagedList
}
