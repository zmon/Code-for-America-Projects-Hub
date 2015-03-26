# Data Models (for view objects) in Code for America Kansas City Projects Hub

This is not intended to be a schema.

In Angular, these might be implemented with Factories and Services. See
this example of [wrapping JS classes in Factories](https://medium.com/opinionated-angularjs/angular-model-objects-with-javascript-classes-2e6a067c73bc)

```
App.Model.Project
  has_many App.Model.Label
  has_one App.Model.Category["Civic Need"]
  has_one App.Model.Category["Tools"]
```
  [(see attributes, data sources)](https://github.com/codeforkansascity/Code-for-America-Projects-Hub/issues/9)

```
App.Model.ProjectIdea
  suggested_by
  requested_by
  validated_by
  goals
  target_audiences
  user_stories
  maintenance_plan
  potential_blockers

App.Model.Category
  belongs_to App.Model.Project
  type {"Civic Need" || "Tools"}
  name
```
  [(see definition)](https://github.com/codeforkansascity/Code-for-America-Projects-Hub/issues/8)

```
App.Model.Label
  belongs_to App.Model.Project
  type
  name
```
  [(see definition)](https://github.com/codeforkansascity/Code-for-America-Projects-Hub/issues/8)

 If we have authenticated, authorized users in the site:
```
App.Model.User
```
