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
}

$(document).ready(function(){
  pageView.handleMainNav();
  pageView.handleHero();
  pageView.changeHero();
});
