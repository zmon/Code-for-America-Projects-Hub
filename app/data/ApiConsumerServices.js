/***
Services for fetching data from external REST APIs
***/
cfahubServices.factory('CFAProjectsService', CFAProjectsService);

CFAProjectsService.$inject = ['$http'];

function CFAProjectsService($http) {
  return {
    getProjects: getProjects
  };
  //@TODO CFA API returns paged results in sets of 10.
  function getProjects() {
    return $http.get('http://codeforamerica.org/api/organizations/Code-for-Kansas-City/projects')
      .success(getProjectsComplete)
      .error(serviceError);

    function getProjectsComplete(data, status) {
      return data.objects;
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
      .error(serviceError);

    function getProjectsComplete(data, status) {
      return data;
    }
  }
}

cfahubServices.factory('GoogleProjectsService', GoogleProjectsService);

GoogleProjectsService.$inject = ['$http'];

function GoogleProjectsService($http) {
  return {
    getApprovedProjects: getApprovedProjects,
    getRawApprovedProjects: getRawApprovedProjects
  };

  function getApprovedProjects() {
    return getRawApprovedProjects()
      .then(function(data, status){
        console.log(data)
        data.data = googleProjectsToSchema().getItems(data);
        return data;
      })
  }

  function getRawApprovedProjects() {
    return $http.get('https://spreadsheets.google.com/feeds/list/1tnW2fTcPEQG93oebrCfvjZw4Vjtn6vkzvqyovxebKlI/1/public/values?alt=json')
      .success(getFeedItems)
      .error(serviceError);
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
      .success(getFeedItems)
      .error(serviceError);
  }
}

function getFeedItems(data, status) {
  // Multiple spreadsheet rows in a single Atom <entry>
    return data.feed;
  }

function serviceError(data, status, statusText) {
  return alert(statusText);
}

function googleProjectsToSchema(data) {
  return {
    getSchema: getSchema,
    getItems: getItems
  }

  function getSchema() {
    return schema = {
      "category": "category",
      "content": "content",
      "gsx$areaofcivicengagementdescribingtheproject": "category",
      "gsx$cityandstate": "city",
      "gsx$civicrequest": "civic",
      "gsx$fulladdress": "full_address",
      "gsx$liveproducturl": "",
      "gsx$location": "location",
      "gsx$maintenanceplan": "maintainence_plan",
      "gsx$non-standardtechnologies": "techstack",
      "gsx$potentialblockers": "potential_blockers",
      "gsx$projectplatform": "platform",
      "gsx$projectsubtitle": "subtitle",
      "gsx$projecttitle": "title",
      "gsx$projecturlongithub": "github_html_url",
      "gsx$street": "",
      "gsx$targetaudience": "target_audience",
      "gsx$timestamp:": "",
      "gsx$userstory": "user_stories",
      "id": "id",
      "link": "link",
      "title": "title",
      "updated": "updated_at"
    };
  }
  
  function getIdeaSchema() {
	  return schema = {
		  "gsx$timestamp":"timestamp",
		  "gsx$giveyourideaatitle":"title",
		  "gsx$giveyourideaasubtitle":"subtitle",
		  "gsx$location":"location",
		  "gsx$whatisyouremailaddress":"email_address",
		  "gsx$whatareaofcivicengagementdescribesyourideathebest":"civic_engagement_area",
		  "gsx$civicrequest":"civic_request",
		  "gsx$nameoftheorganization":"organization_name",
		  "gsx$heyihaveaprojectrepoongithubalreadyhereisthelink":"github_url",
		  "gsx$targetaudience":"target_audiences",
		  "gsx$userstory":"user_stories",
		  "gsx$maintenanceplan":"maintenance_plan",
		  "gsx$potentialblockers":"potential_blockers"			  
	  };
  }

  function getItems(data) {
    // Entry is an array of row objects.
    entry = data.data.feed.entry;
    console.log(entry)
    var schema = getSchema();
    angular.forEach(entry, function(row, rowkey) {
      angular.forEach(row, function(field, fieldkey) {
        if(schema[fieldkey]) {
          // Add a new object property with the value from schema as key.
          (entry[rowkey])[schema[fieldkey]] = field;
        }
      });
    });
    return entry;
  }
  
  function getById(data, id) {
	    var returnValue;
	    var temp;
        for (i = 0; i < data.length; i++) {
        	temp = data[i];
        	if(temp['id'] == id) {
        		return idea;
        	}
	    });
	  }//end getIdea

  
  function getPagedData(data, pageNumber, pageSize){
	  	var startIndex = pageNumber * pageSize;
	  	var endIndex = startIndex + pageSize;
	  	var records=[];
	  	var recordsIndex = 0;
	  	while(startIndex < endIndex) {
	  		record[recordsIndex] = ideas[startIndex];
	  		startIndex++;
	  		recordsIndex++;
	    }
	    return records;
  }//end getPagedData
  
  
  
  
  
  
}
