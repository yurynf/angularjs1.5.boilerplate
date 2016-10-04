# AngularJS 1.5.x Boilerplate

A minimalist boilerplate for kick-starting [AngularJS 1.5.x](http://angularjs.org) projects.



## Dependencies

* [Node.js](https://nodejs.org) JavaScript runtime
* [Grunt](http://gruntjs.com/) JavaScript Task Runner with the command line interface (CLI) installed globally.
* [Compass](http://compass-style.org/) an open-source CSS Authoring Framework
* Any local web server. [http-server](https://www.npmjs.com/package/http-server) may be a good choice.

## Steps to Start a New Project
1. Clone the repository:
```sh
$$ git clone git://github.com/yurynf/angularjs1.5.boilerplate.git
```

2. Download the required dependencies:
```sh
$$ npm install
```

3. Build the development environment:
```sh
$$ grunt
```
4. Run the [Karma](https://karma-runner.github.io)/[Jasmine](http://jasmine.github.io/) tests to be sure the things work as expected
```sh
$$ grunt test
```
6. Build the production release (will be built in the `/dist` folder):
```sh
$$ grunt release
```
7. Open `index.html` in your favorite browser using `/src` as a root for a development version, or `/dist` for a production version. E.g.:
```sh
http://localhost:8080/src/index.html
```

## The Project Structure
```
src/ ·························································· development root
    app/ ······················································ application resources
        js/ ··················································· js files
            mockdata/ ········································· mockdata files
                mockdata.json ································· a stub mockdata file
            modules/ ·········································· application AngularJS modules
                about/ ········································ 'about' module
                    about.tpl.html ···························· HTML template
                    ctrlAbout.js ······························ controller
                common/ ······································· 'common' module
                    directive.navigationMenu/ ················· a navigation menu directive folder
                        directive.navigationMenu.js ··········· the directive js code
                        directive.navigationMenu.tpl.html ····· the directive HTML template
                home/ ········································· 'home' module
                    ctrlHome.js ······························· controller
                    home.tpl.html ····························· HTML template
                notFound/ ····································· belongs to the main application module
                    ctrlNotFound.js ··························· controller
                    notFound.tpl.html ························· HTML template
                routes/ ······································· 'routes' module
                    routes.js ································· the module's JS
            app.js ············································ the application entry point
            appConstants.js ··································· application constants
        media/ ················································ media files folder
            images/ ··········································· images folder
                angularjs-logo.png ···························· a stub image
        styles/ ··············································· styles folder
            config.rb ········································· SASS-Compass configuration file (dev)
            main.css ·········································· compiled CSS
            main.scss ········································· SASS main file
    lib/ ······················································ 3rd party libraries folder
        css/ ··················································
            _normalize.scss ··································· a sample used library
        js/ ···················································
            angular/ ·········································· AngularJS files
    index.html ················································ the start point
tests/ ························································ Jasmine/Karma tests folder
    about/ ···················································· tests for 'about' module
        ctrlAbout.spec.js ····································· a stub test
    home/ ····················································· tests for 'home' module
        ctrlHome.spec.js ······································ a stub test
.gitignore ···················································· rules to avoid committing files/folders
compass-config-release.rb ····································· SASS-Compass configuration file (production)
Gruntfile.js ·················································· Grunt tasks runner configuration file
karma.conf.js ················································· Karma tests runner configuration file
package.json ·················································· the project dependencies
README.md ····················································· This file :)
```


## Notes

1. **Don't forget** to change the module names accordingly to your project's requirements.

2. I did not include [Live Reload](http://livereload.com/), so a page refresh is required after making changes.
There is not any special reason for that, just my personal preference.
Working on a project, the only watcher I usually use is `compass watch` to compile SASS files into CSS.

3. All HTML templates are being 'compiled' into a single JS file **only for production
release**:

```sh
$$ grunt release
```

## To Do
1. Add E2E [Protractor](http://www.protractortest.org) tests.

*Feel free to submit your own suggestions.*

