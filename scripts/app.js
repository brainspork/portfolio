'use strict';

function Proj(rawData){
  this.path = rawData.img;
  this.name = rawData.name;
  this.date = rawData.date;
  this.url = rawData.url;
  this.info = rawData.info;
  this.blurb = this.info.substring(0, 125) + '...';
}

Proj.all = [];

Proj.prototype.toHtml = function(){
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);

  return templateRender(this);
};

Proj.prototype.projToHtml = function(){
  var template = $('#project-fullscreen').html();
  var templateRender = Handlebars.compile(template);

  return templateRender(this);
};

Proj.loadData = function (raw){
  raw.forEach (function(data){
    Proj.all.push(new Proj(data));
  });
}

Proj.fetchData = function(){
  if(localStorage.projectData){
    Proj.loadData(JSON.parse(localStorage.projectData));
  }else{
    $.getJSON('data/project-data.json')
  .then(function(data){
    localStorage.projectData = JSON.stringify(data);
    Proj.loadData(data);
  }, function(err){
    console.log('There was an error', err);
  });
  }
};
