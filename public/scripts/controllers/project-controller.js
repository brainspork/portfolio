'use strict';
var app = app || {};

(function(module){
  const projectController = {};

  projectController.projectPage = () => {
    $('.content').hide();
    $('#project-display').show();
  }

  projectController.showProject = () =>{
    var $project = $('.project-container');
    $project.on('click', '.btn', function(){
      var $name = $(this).siblings('h4').html();
      var clicked = Proj.all.filter(function(pro){
        return pro.name === $name;
      });
      $('.content').fadeOut();
      $('#project-display').html(clicked[0].projToHtml()).fadeIn();
      clicked = '';
    });
  }

  module.projectController = projectController;
})(app);
