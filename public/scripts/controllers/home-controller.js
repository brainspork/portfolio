'use strict';
var app = app || {};

(function(module){
  const homeController = {};

  homeController.goHome = () => {
    app.pageView.htmlInit();
  }

  module.homeController = homeController;
})(app);
