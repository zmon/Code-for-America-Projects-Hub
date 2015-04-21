/*
 * 
 */
cfahubServices.service('ProjectIdeaService', function(){
    var ideas;
    var count;
    $http({method : 'GET',url : 'https://spreadsheets.google.com/feeds/list/1PGM2P9o0bkJ_xCkoH2ps_Dp5xnBDrPxmIB-jnJWAwhE/1/public/values?alt=json'})
       .success(function(data, status) {
            /*
            *Because ideas have no PK we need to create a hack to work around it.
            *We create an array to loop through which does 2 things.  First of all it removes 
    	    *excess crap from google's json feed.
    	    *Second it lets us loop throught the items and convert the timestamp to 
    	    *float which we use as an PK in memory in the app.
    	    */
           var tempIdeas = data.feeed.entry;
           count = tempIdeas.length;
           var ideasJson = "{\"App.Model.Project\":["; 
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
           console.log(ideasJson);
           ideas = JSON.parse(ideasJson);
        })
       .error(function(data, status) {
           alert("HTTP Error");
       });
    
    factory.getHttpItems = function()
    {
    	/*This is used to initially load the ideas and then 
    	 * everything else is used because the records are cached.
    	 */
        return ideas;
    }//end getHttpItems;
    
    
	this.list = function () 
	{
        return ideas;
    }//end list
	
	this.search = function(searchCriteria)
	{
		var foundRecords = [];
		var foundRecordCount = 0;
		var recordCount = items.length;
		for(i =0; i < recordCount; i++)
		{
        	if(ideas['App.Model.Project'][i]['title'].toLower().contains(searchCriteria.toLower()))
    		{
    			foundRecords[foundRecordCount] = ['App.Model.Project'][i];
    			foundRecordCount++;
    		}
		}
		return foundRecords;
	}//end search
	
    this.getIdea = function(ideaId)
    {
        for(i=0;i<count;i++)
        {
        	//I think we have to do it like this...
        	if(ideas['App.Model.Project'][i]['id']==ideaId)
    		{
    			return ideas[i];
    		}
        }
    }//end getIdea
    
    
    this.pagedList = function(startingIndex, pageSize)
    {
    	var endIndex = startingIndex + pageSize;
    	var loopCount = pageSize;
    	if(endIndex < count)
		{
    		var loopCount = count - endIndex;
		}//end if
    	var maxRecord = loopCount + startingIndex; 
    	var records[];
    	var x=0;
    	for(i = startingIndex; i < maxRecord; i++ )
    	{
    		record[x] = ideas[i];
    		x++;
    		i++;
    	}//end for
    	return records;
    }//end pagedList
    
    
    
    
});
