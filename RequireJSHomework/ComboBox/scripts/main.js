/// <reference path="libs/jquery.js" />

(function () {
    require.config({
        baseUrl: 'scripts/libs',
        paths: {
            "jquery": "jquery",
            "handlebars": "handlebars",
            "combobox": "../combobox"
        }
    });

    require(["jquery", "combobox", "handlebars"], function ($) {

        // Data object
        var people = {
            people: [{
                id: 1, name: "Doncho Minkov", age: 18, avatarUrl: "images/doncho.jpg"
            },
            {
                id: 2, name: "Niki Kostov", age: 19, avatarUrl: "images/niki.jpg"
            },
            {
                id: 3, name: "Ivo Kenov", age: 15, avatarUrl: "images/ivo.jpg"
            }]
        }

        // Use data and template to populate the main div
        var tepmplateCode = $('#person-template'),
            templateHtml = tepmplateCode.html(),
            compiledTemplate = Handlebars.compile(templateHtml);

        $("#mainDiv").append(compiledTemplate(people));

        // Use jquery plugin to make the dropdown
        $("#mainDiv").combobox();
    });

}());