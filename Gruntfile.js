"use strict";

module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-sails-linker");
    grunt.loadNpmTasks("grunt-html2js");
    grunt.loadNpmTasks("grunt-karma");

    grunt.initConfig({

        version: "1.0.0",
        dist_folder: "dist",
        lib_folder: "src/lib",
        temp_folder: "temp",
        dependencies_folder: "node_modules",
        dev_root_folder: "src",

        clean: {
            options: { force: true },

            build: [
                "<%= lib_folder %>/*"
            ],

            release: [
                "<%= temp_folder %>",
                "<%= dist_folder %>/*"
            ],

            post_release: [
                "<%= temp_folder %>",
                "<%= lib_folder %>/js/angular/angular.min.js",
                "<%= lib_folder %>/js/angular/angular-route.min.js"
            ]
        },

        copy: {
            dev : {
                files: [
                    { src: "<%= dependencies_folder %>/normalize.css/normalize.css", dest: "<%= lib_folder %>/css/_normalize.scss" },
                    { src: "<%= dependencies_folder %>/angular/angular.js", dest: "<%= lib_folder %>/js/angular/angular.js" },
                    { src: "<%= dependencies_folder %>/angular-route/angular-route.js", dest: "<%= lib_folder %>/js/angular/angular-route.js" },
                    { src: "<%= dependencies_folder %>/angular-mocks/angular-mocks.js", dest: "<%= lib_folder %>/js/angular/angular-mocks.js" }
                ]
            },

            release: {
                files: [
                    { src: "<%= dependencies_folder %>/angular/angular.min.js", dest: "<%= lib_folder %>/js/angular/angular.min.js" },
                    { src: "<%= dependencies_folder %>/angular-route/angular-route.min.js", dest: "<%= lib_folder %>/js/angular/angular-route.min.js" },
                    { src: "<%= dev_root_folder %>/index.html", dest: "<%= dist_folder %>/index.html" },
                    { expand: true, cwd: "<%= dev_root_folder %>/app/media/", src: ["**"], dest: "<%= dist_folder %>/app/media" }
                ]
            }
        },

        html2js: {
            options: {

            },
            release: {
                src: ["<%= dev_root_folder %>/**/*.tpl.html"],
                dest: "<%= temp_folder %>/html-templates/html-templates.js",
                module: "htmlTemplates"
            }
        },

        uglify: {
            options: {
                sourceMap: true
            },
            release: {
                files: {
                    "<%= temp_folder %>/js/app.min.js": [
                        "<%= dev_root_folder %>/app/js/app.js",
                        "<%= dev_root_folder %>/app/js/appConstants.js",
                        "<%= dev_root_folder %>/app/js/modules/**/module*.js",
                        "<%= dev_root_folder %>/app/js/modules/**/*.js"
                    ]
                }
            }
        },

        concat: {
            options: {
                separator: "\n/* ------------------------------------------------- */\n"
            },
            release: {
                src: [
                    "<%= lib_folder %>/js/angular/angular.min.js",
                    "<%= lib_folder %>/js/angular/angular-route.min.js",
                    "<%= temp_folder %>/js/app.min.js",
                    "<%= temp_folder %>/html-templates/html-templates.js"
                ],
                dest: "<%= dist_folder %>/app/js/app-release-<%= version %>.js"
            }
        },

        compass: {
            release: {
                options: {
                    config: "compass-config-release.rb",
                    environment: "production"
                }
            }
        },

        "sails-linker": {
            defaultOptions: {
                options: {
                    startTag: "<!--appJsScripts:START-->",
                    endTag: "<!--appJsScripts:END-->",
                    fileTmpl: "<script  type=\"application/javascript\" src=\"%s\"></script>",
                    appRoot: "<%= dist_folder %>/"
                },
                files: {
                    "<%= dist_folder %>/index.html": ["<%= dist_folder %>/app/js/**/*.js"]
                }
            }
        },

        karma: {
            unit: {
                configFile: "karma.conf.js"
            }
        }

    });

    grunt.registerTask("default", ["clean:build", "copy:dev"]);

    grunt.registerTask("test", ["karma"]);

    grunt.registerTask("release", [
        "clean:release",
        "copy:release",
        "uglify",
        "html2js",
        "concat",
        "sails-linker",
        "compass:release",
        "clean:post_release"
    ]);

};