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
    var ideas, count;
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
  
  //Removed search since Angular has it built in. -Al

  function getIdea(ideaId) {
    var ideas, idea;
    return getIdeas().then(function(data) {
        ideas = data['App.Model.ProjectIdea'];
        for (i = 0; i < ideas.length; i++) {
          idea = ideas[i];
          if(idea['id'] == ideaId) {
            return idea;
          }
        }
        return idea;
      });
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
