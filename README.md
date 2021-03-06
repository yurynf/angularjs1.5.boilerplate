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
src/ ииииииииииииииииииииииииииииииииииииииииииииииииииииииииии development root
    app/ ииииииииииииииииииииииииииииииииииииииииииииииииииииии application resources
        js/ иииииииииииииииииииииииииииииииииииииииииииииииииии js files
            mockdata/ иииииииииииииииииииииииииииииииииииииииии mockdata files
                mockdata.json иииииииииииииииииииииииииииииииии a stub mockdata file
            modules/ ииииииииииииииииииииииииииииииииииииииииии application AngularJS modules
                about/ ииииииииииииииииииииииииииииииииииииииии 'about' module
                    about.tpl.html ииииииииииииииииииииииииииии HTML template
                    ctrlAbout.js ииииииииииииииииииииииииииииии controller
                common/ иииииииииииииииииииииииииииииииииииииии 'common' module
                    directive.navigationMenu/ иииииииииииииииии a navigation menu directive folder
                        directive.navigationMenu.js иииииииииии the directive js code
                        directive.navigationMenu.tpl.html иииии the directive HTML template
                home/ иииииииииииииииииииииииииииииииииииииииии 'home' module
                    ctrlHome.js иииииииииииииииииииииииииииииии controller
                    home.tpl.html иииииииииииииииииииииииииииии HTML template
                notFound/ иииииииииииииииииииииииииииииииииииии belongs to the main application module
                    ctrlNotFound.js иииииииииииииииииииииииииии controller
                    notFound.tpl.html иииииииииииииииииииииииии HTML template
                routes/ иииииииииииииииииииииииииииииииииииииии 'routes' module
                    routes.js иииииииииииииииииииииииииииииииии the module's JS
            app.js ииииииииииииииииииииииииииииииииииииииииииии the application entry point
            appConstants.js иииииииииииииииииииииииииииииииииии application constants
        media/ ииииииииииииииииииииииииииииииииииииииииииииииии media files folder
            images/ иииииииииииииииииииииииииииииииииииииииииии images folder
                angularjs-logo.png ииииииииииииииииииииииииииии a stub image
        styles/ иииииииииииииииииииииииииииииииииииииииииииииии styles folder
            config.rb иииииииииииииииииииииииииииииииииииииииии SASS-Compass configuration file (dev)
            main.css ииииииииииииииииииииииииииииииииииииииииии compiled CSS
            main.scss иииииииииииииииииииииииииииииииииииииииии SASS main file
    lib/ ииииииииииииииииииииииииииииииииииииииииииииииииииииии 3rd party libraries folder
        css/ ииииииииииииииииииииииииииииииииииииииииииииииииии
            _normalize.scss иииииииииииииииииииииииииииииииииии a sample used library
        js/ иииииииииииииииииииииииииииииииииииииииииииииииииии
            angular/ ииииииииииииииииииииииииииииииииииииииииии AngularJS files
    index.html ииииииииииииииииииииииииииииииииииииииииииииииии the start point
tests/ ииииииииииииииииииииииииииииииииииииииииииииииииииииииии Jasmine/Karma tests folder
    about/ ииииииииииииииииииииииииииииииииииииииииииииииииииии tests for 'about' module
        ctrlAbout.spec.js иииииииииииииииииииииииииииииииииииии a stub test
    home/ иииииииииииииииииииииииииииииииииииииииииииииииииииии tests for 'home' module
        ctrlHome.spec.js ииииииииииииииииииииииииииииииииииииии a stub test
.gitignore ииииииииииииииииииииииииииииииииииииииииииииииииииии rules to avoid committing files/folders
compass-config-release.rb иииииииииииииииииииииииииииииииииииии SASS-Compass configuration file (production)
Gruntfile.js ииииииииииииииииииииииииииииииииииииииииииииииииии Grunt tasks runner configuration file
karma.conf.js иииииииииииииииииииииииииииииииииииииииииииииииии Karma tests runner configuration file
package.json ииииииииииииииииииииииииииииииииииииииииииииииииии the project dependencies
README.md иииииииииииииииииииииииииииииииииииииииииииииииииииии This file :)
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

