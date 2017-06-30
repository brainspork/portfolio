'use strict';

 var app = app || {};

(function(module){
  var pageView = {};
  var $hero = $('.hero');
  var $currentAnimation;

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

  var render = Handlebars.compile($('#project-template').text());

  pageView.htmlInit = function(){
    $('#project-controller').append(app.proj.all.map(render));
    pageView.handleHero();
    pageView.changeHero();
  };

  module.pageView = pageView;
})(app);
