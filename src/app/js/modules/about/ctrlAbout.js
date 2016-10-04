angular.module("about")
    .controller("ctrlAbout", ["appConstants", function(appConstants) {
        "use strict";

        var ctrl = this;

        ctrl.documentTitle = "About";
        ctrl.license = appConstants.license;

    }]);
