angular.module("routes").
    config(["$locationProvider", "$routeProvider",
        function config($locationProvider, $routeProvider) {
            "use strict";

            $locationProvider.hashPrefix("!");

            $routeProvider.
                when("/", {
                    redirectTo: "home"
                }).
                when("/home", {
                    controller: "ctrlHome",
                    controllerAs: "ctrl",
                    templateUrl: "app/js/modules/home/home.tpl.html"
                }).
                when("/about", {
                    controller: "ctrlAbout",
                    controllerAs: "ctrl",
                    templateUrl: "app/js/modules/about/about.tpl.html"
                }).
                otherwise({
                    controller: "ctrlNotFound",
                    controllerAs: "ctrl",
                    templateUrl: "app/js/modules/notFound/notFound.tpl.html"
                });
        }
    ]);
