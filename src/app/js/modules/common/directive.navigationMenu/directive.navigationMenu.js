angular.module("common")
    .directive("navigationMenu", function () {
        "use strict";

        return {
            restrict : "A",
            templateUrl: "app/js/modules/common/directive.navigationMenu/directive.navigationMenu.tpl.html",

            link: function(scope, element, attributes){

            }
        };
    });