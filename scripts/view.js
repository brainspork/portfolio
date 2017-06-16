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
  $hero.html(animations[0]);
}

$(document).ready(function(){
  pageView.handleMainNav();
  // pageView.handleHero();
});
