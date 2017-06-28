'use strict';
var app = app || {};

(function(module){
  const homeController = {};

  homeController.load = () => {
    app.proj.fetchData(app.pageView.htmlInit);
  }

  homeController.goHome = () => {
    $('.content').show();
    $('#project-display').hide();
  }

  module.homeController = homeController;
})(app);
