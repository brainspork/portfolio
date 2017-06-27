'use strict';

 var app = app || {};

(function(module){
  var pageView = {};
  var $hero = $('.hero');
  var $currentAnimation;

  pageView.handleMainNav = function(){
    $('nav ul').on('click', 'li', function(){
      var $data = $(this).data('category');
      var $project = $('#project-display');
      if($data === 'home'){
        $('.content').fadeIn();
        $project.hide();
      }else{
        $('.content').fadeOut();
        $('#' + $data).fadeIn();
      }
    });
  }

  pageView.handleHero = function(){
    $hero.append(animations[0]);
    $currentAnimation = $hero.children('.animation').data('index');
  }

  pageView.changeHero = function(){
    var $leftArrow = $('#left');
    var $rightArrow = $('#right');
    $rightArrow.on('click', function(){
      $hero.html('');
      if($currentAnimation === (animations.length - 1)){
        $hero.append(animations[$currentAnimation = 0]);
      }else{
        $hero.append(animations[$currentAnimation += 1]);
      }
    });

    $leftArrow.on('click', function(){
      $hero.html('');
      if($currentAnimation === 0){
        $hero.append(animations[$currentAnimation = animations.length - 1]);
      }else{
        $hero.append(animations[$currentAnimation -= 1]);
      }
    });
  }

  pageView.handleProjectNav = function(){
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

  pageView.htmlInit = function(){
    app.Proj.fetchData();
    app.Proj.all.forEach(function(project){
      $('#project-controller').append(project.toHtml());
    });
    pageView.handleMainNav();
    pageView.handleHero();
    pageView.changeHero();
    pageView.handleProjectNav();
  };

  module.pageView = pageView;
})(app);
