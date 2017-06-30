'use strict';
var app = app || {};

(function(module){
  const proj = {};

  proj.all = [];

  proj.projToHtml = function(){
    var template = $('#project-fullscreen').html();
    var templateRender = Handlebars.compile(template);

    return templateRender(this);
  };

  proj.fetchData = (callback) =>{
    $.ajax({
      url: '/github/user/repos',
      success: function(data, message){
        console.log(message);
        proj.all = data.filter(function(repo){return repo.description !== null})
        .map(curr =>
          ({
            name: curr.name,
            description: curr.description,
            created: curr.created_at,
            repo: curr.html_url
          })
        );
        callback();
      }
    });
  }

  module.proj = proj;
})(app);
