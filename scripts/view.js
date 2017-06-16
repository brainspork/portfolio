'use strict';

var pageView = {};

pageView.handleMainNav = function(){
  $('nav ul').on('click', 'li', function(){
    var $data = $(this).data('category');
    $('.content').hide();
    $('#' + $data).show();
  });
}

pageView.handleHero = function(){
  var $hero = $('.hero');
  $hero.append(animations[0]);
}

pageView.changeHero = function(){
  var $hero = $('.hero');
  var $arrow = $('.hero-arrow');
  $arrow.on('click', function(){
    var $curr = $hero.attr('data-index');
    console.log($curr);
    if($(this) + ':has(#left)'){
      $hero.html(animations[$curr - 1]);
    }
  })

}

$(document).ready(function(){
  pageView.handleMainNav();
  pageView.handleHero();
  pageView.changeHero();
});
