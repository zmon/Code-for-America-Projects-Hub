# Code for America Projects Hub
## And how you can help
Goals:

Help Brigade members find projects to work on. Promote multi-Brigade collaboration. Onboard new members. Encourage public contribution of ideas. Karma. Visualize scope for Code for America. Provide filtered and sorted card list of projects and ideas for development. The list should be available nation-wide and by city.  

###Production preview##

(in progress): http://codeforkc.org/Code-for-America-Projects-Hub/

###HTML/CSS prototype

Projects Hub prototype: http://codeforkc.org/Code-for-America-Projects-Hub/prototype/

Project page prototype: http://codeforkc.org/Code-for-America-Projects-Hub/prototype/CfAprojectPage.htm

Idea page prototype: http://codeforkc.org/Code-for-America-Projects-Hub/prototype/CfAideaPage.htm

###A form to add project data missing on GitHub

https://docs.google.com/forms/d/1Z6duJDUZ89MkjUY0jFowUvKjMvru6U2BN7_bLERH6s0/viewform

###A form to submit civic project idea

https://docs.google.com/forms/d/1H62GmD35j1kwHYcX7r8jT8Gwj3dm8d-SZBVV_H9oz9s/viewform

### Data sources

Project card data: https://github.com/codeforkansascity/Code-for-America-Projects-Hub/issues/9.

Projects Hub filter data: https://github.com/codeforkansascity/Code-for-America-Projects-Hub/issues/17

### Nesting of HTML fragments used in production code

https://github.com/codeforkansascity/Code-for-America-Projects-Hub/wiki/Diagram-of-dynamic-content,-HTML-Views-and-Fragment-Nesting

Hub, Add Idea Form and Project Page screenshots:

![alt tag] (https://cloud.githubusercontent.com/assets/10410203/6722601/93e5bc5c-cdaa-11e4-9011-58be0c02923a.png?raw=true)

### Developer notes ###

We're using Bower for package management.

First, install dependencies with npm. The package.json file provides information to npm, identifying the project and managing the project's dependencies. [Documentation](https://docs.npmjs.com/files/package.json) 

`npm install --dev`

This will also run `bower --install` for you, installing all packages configured
within the bower.json file.

To exclude devDependency packages, use the `-p` (--production) flag. [Documentation](http://bower.io)
`bower install -p`

For running tests, the project includes the karma.conf.js file. With Karma and
Grunt installed, run Karma.
`karma start`

In your browser, visit the Karma listener address. Karma watches project files and continuously runs your tests as you develop. [Documentation](http://karma-runner.github.io/0.12/intro/installation.html)
