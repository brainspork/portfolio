'use strict';
var app = app || {};

(function(module){
  const projectController = {};

  projectController.projectPage = () => {
    $('.content').hide();
    $('#projects').show();
  }

  module.projectController = projectController;
})(app);
