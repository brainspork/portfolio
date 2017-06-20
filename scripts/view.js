'use strict';

var pageView = {};
var $hero = $('.hero');
var $currentAnimation;

pageView.handleMainNav = function(){
  $('nav ul').on('click', 'li', function(){
    var $data = $(this).data('category');
    if($data === 'home'){
      $('.content').show();
    }else{
      $('.content').hide();
      $('#' + $data).show();
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

pageView.htmlInit = function(){
  Proj.fetchData();
  Proj.all.forEach(function(project){
    $('#project-controller').append(project.toHtml());
  });
  pageView.handleMainNav();
  pageView.handleHero();
  pageView.changeHero();
};
