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
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);

  return templateRender(this);
};

rawData.forEach(function(raw){
  projects.push(new Proj(raw));
});

projects.forEach(function(project){
  $('#project-controller').append(project.toHtml());
})
