'use strict';

var projects = [];

function Proj(rawData){
  this.path = rawData.img;
  this.name = rawData.name;
  this.date = rawData.date;
  this.url = rawData.url;
  this.info = rawData.info;
}

Proj.prototype.toHtml = function(){
  var $newProject = $('li.template').clone();
  $newProject.removeClass('template');
  $newProject.addClass('project-container');
  $newProject.find('.screen-shot').attr('src', this.path);
  $newProject.find('h4').html(this.name);
  return $newProject;
};

rawData.forEach(function(raw){
  projects.push(new Proj(raw));
});

projects.forEach(function(project){
  $('.project-controller').append(project.toHtml());
})
