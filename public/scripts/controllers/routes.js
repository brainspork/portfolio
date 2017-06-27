'use strict';
var app = app || {};

page('/', app.homeController.load);
page('/home', app.homeController.goHome);
page('/projects', app.projectController.projectPage);
page();
