# Code for America Projects Hub
## And how you can help

Help Brigade members find projects to work on. Promote multi-Brigade collaboration. Onboard new members. Encourage public contribution of ideas. Karma. Visualize scope for Code for America. Provide filtered and sorted card list of projects and ideas for development. The list should be available nation-wide and by city.  
![alt tag] (https://cloud.githubusercontent.com/assets/10410203/6722601/93e5bc5c-cdaa-11e4-9011-58be0c02923a.png?raw=true)

We track and discuss this project in codeforkc group at Slack.com. https://codeforkc.slack.com/messages/project-hub/
Send email to pbarham@codeforamerica.org to join Slack group.

###Production Preview##

(in progress): http://codeforkc.org/Code-for-America-Projects-Hub/

###Project/Code Status

Need Angular expert.

###HTML/CSS Prototype (for reference)

Projects Hub prototype: http://codeforkc.org/Code-for-America-Projects-Hub/prototype/

Project page prototype: http://codeforkc.org/Code-for-America-Projects-Hub/prototype/CfAprojectPage.htm

Idea page prototype: http://codeforkc.org/Code-for-America-Projects-Hub/prototype/CfAideaPage.htm

###A form to add project data missing on GitHub

https://docs.google.com/forms/d/1Z6duJDUZ89MkjUY0jFowUvKjMvru6U2BN7_bLERH6s0/viewform

###A form to submit civic project idea

https://docs.google.com/forms/d/1H62GmD35j1kwHYcX7r8jT8Gwj3dm8d-SZBVV_H9oz9s/viewform

### Developer notes ###

See Getting Started wiki for help setting up an editor with Git https://github.com/codeforkansascity/Code-for-America-Projects-Hub/wiki/Getting-an-Environment-Started .

See [the Angular Style Guide](https://github.com/johnpapa/angular-styleguide) for code structure (by feature) and "best" practice for writing services, factories, etc.

We're using [Bower](http://bower.io) for package management.

First, install dependencies with npm. The [package.json](https://docs.npmjs.com/files/package.json) file provides information to npm, identifying the project and managing the project's dependencies.

`npm install --dev`

This will also run `bower --install` for you, installing all packages configured within the bower.json file.

To exclude devDependency packages, use the `-p` (--production) flag.
`bower install -p`

#### Dev Dependencies ####
[Jasmine](http://jasmine.github.io/2.2/introduction.html) 
is included to help with test-driven development.

[Karma](http://karma-runner.github.io/0.12/intro/installation.html)
is included For running tests. The project includes a karma.conf.js file. With Karma and Grunt installed, run Karma.
`karma start`

In your browser, visit the Karma listener address. Karma watches project files and continuously runs your tests as you code.

### Code Structure

See pages in wiki: https://github.com/codeforkansascity/Code-for-America-Projects-Hub/wiki

### Data sources

Project card data: https://github.com/codeforkansascity/Code-for-America-Projects-Hub/issues/9.

Projects Hub filter data: https://github.com/codeforkansascity/Code-for-America-Projects-Hub/issues/17

### Nesting of HTML fragments used in production code

https://github.com/codeforkansascity/Code-for-America-Projects-Hub/wiki/Diagram-of-dynamic-content,-HTML-Views-and-Fragment-Nesting







