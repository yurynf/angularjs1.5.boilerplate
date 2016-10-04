;var appModules = [
    "routes",
    "htmlTemplates",
    "common",
    "home",
    "about"
];

angular.module("routes", ["ngRoute"]);
angular.module("about", []);
angular.module("common", []);
angular.module("home", []);
angular.module("htmlTemplates", []);    //This module will be overwritten in the production environment

angular.module("ajsbpApp", appModules);
