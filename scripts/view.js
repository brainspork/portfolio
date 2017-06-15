'use strict';

var pageView = {};

pageView.handleMainNav = function(){
  $('nav ul').on('click', 'li', function(){
    var $data = $(this).data('category');
    $('.content').hide();
    $('#' + $data).show();
  });
}

$(document).ready(function(){
  pageView.handleMainNav();
});
