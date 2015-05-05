


Create From if it does not exists
=================================

Add Location Fields 
   Street, Text, Required.   Users will be able to enter addresses in the same formats that google maps use.  i.g. 31st and Troost 
   CityState, Text, Required


Confirmation page: 
    "Your response has been recorded.  Please enter your project only once.  It make take a few moments to appear on the map."


Publish to the web
==================

File -> Publish -> Publish
entire document

Verify that the From saves to the same spreadsheet each time.
=============================================================

Set responses to be recorded in a single spreadsheet.
    Responses -> Change Responses Destination
    New Spread Sheet
    UN-CHECK "Always create a new spreadsheet"
    Create

Add 'FullAddress and 'Location' columns to Spread Sheet
======================================

From the Form goto live view to create an entry

Add "FullAddress" field, next to last column
Add "Location" field, last column

Clear out the spreadsheet if you do not want this data.


Add script to spread sheet
==========================
Go back to spread sheet
Start Goolge Apps Script Project
   Tools -> Script Editor -> Create Blank Project
   Name it "GeoCode Script"
Tell Script where table is, the address column in the spread sheet, and where to put the location in the Fusion table.
   File -> Project Properties -> Script properties
   Add
     addressColumn  Address column in the spread sheet  "FullAddress"
     latlngColumn  to put in the Fustion table "Location"
     streetAddressColumn     Street
     cityStateColumn         City and State

Replace the script with "script for Google forms.txt" origanly from  https://github.com/lclontz/google_forms_to_fusion_tables/


Check authorization
===================
In script window
   Run -> checkAuthorization
   Click Contineu on Authorization required
   Click Accept on "Sync Script would like to:

Have spread sheet up date the google fusion table whenever it is updated
========================================================================
In script window
Resources -> Current project's triggers
Add
Run: onFormSubmit, Events: From spreadsheet, On form submit
Add a new trigger
Run: Sync,  Events: Time-driven, Hour timer, Every hour

Problems
========
View logs

If you get 

   "Problem running SQK: SELECT .... Exception: Access Not Configured. The API is not enabled for your project, or there is a per-IP or per-Referer restriction configured on your API key and the request does not match these restrictions. Please use the Google Developers Console to update your configuration.

Then you have not enabled Fusion Table API in the Developers Console, od this through the step above in the Script Resources ....


* Share the fusion table to the world view only
  * Click Share
  * Change access to "Anyone with the link" can view

* Share with other on your team to edit.


* Google Using Fusion Tables https://developers.google.com/fusiontables/docs/v1/using#auth
    * About authorization protocols - I did the 
        * Go to Google Developers Console https://console.developers.google.com/project
        * Create or Select a project.
        * In the sidebar on the left, select APIs & auth. In the list of APIs, 

              make sure the status is ON for the Fusion Tables API.  <--- Big deal

        * In the sidebar on the left, select Credentials.
        * Public API keys: A request that does not provide an OAuth 2.0 token must send an API key. 
          The key identifies your project and provides API access, quota, and reports. 
          If the key type you need does not already exist, create an API key by selecting Create New Key 
          and then selecting the appropriate key type. 
          Then enter the additional data required for that key type.
            * Click on Credentials under APIs & auth
            * Click on "Create new Key"
            * Select "Browser key"
            * Leave "ACCEPT REQUESTS FROM THESE HTTP REFERERS (WEB SITES)" blank



Google has disabled use of the Maps API for this application. This site is not authorized to use the Google Maps client ID provided. If you are the owner of this application, you can learn more about registering URLs here: https://developers.google.com/maps/documentation/business/clientside/auth#registering_authorized_url

I tried turning on Google Maps JavaScript API v3 in the developers console
Then https://developers.google.com/maps/documentation/javascript/tutorial#api_key 

    * Visit the APIs Console at https://code.google.com/apis/console and log in with your Google Account.
    *  the Services link from the left-hand menu.
    *  the Google Maps JavaScript API v3 service.
    *  the API Access link from the left-hand menu. Your API key is available from the API Access page, in the Simple API Access section. Maps API applications use the Key for browser apps

Use the value of API key in main.js's googlemapsapikey: value

Turn on Contacts API and Google+ API"  per http://stackoverflow.com/questions/22870082/getting-error-403-access-not-configured-please-use-google-developers-console-t


See https://developers.google.com/fusiontables/docs/v1/getting_started 

* You should be able to run a query against it

     https://www.googleapis.com/fusiontables/v1/query?sql=SELECT * FROM 11HmkFMesjwdeY2gLpV-U84GIwqvxjvTGU_Jk8rnslJU&key=AIzaSyAeXVoM70qQo03RkeF3KTfRUSPAd2KuHaA

     https://www.googleapis.com/fusiontables/v1/query?sql=SELECT * FROM 11HmkFMesjwdeY2gLpV-U84GIwqvxjvTGU_Jk8rnslJU&key=your API key
                                                                        \ from the url of your fustion table   /
                                                                          or file -> about-> id
                                                                          they also refer to this as the table id

    https://www.googleapis.com/fusiontables/v1/tables/tableId/columns



http://spreadsheets.google.com/tq?tqx=out:html&tq=SELECT *&key=1obWvfcLPePcgjbhrkqsJPi3lm3U7uf4fPWYWlyQ2ZZQ

