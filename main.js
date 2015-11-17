var $ = require('jquery');
var _ = require('underscore');
var ItemCollection = require('./itemCollection');
var ItemModel = require('./itemModel');


$(document).ready(function () {
      page.init();
  });

  var page = {


  init: function() {
  page.initStyling();
  page.initEvents();

  },


  initEvents: function (){
    $('button').on('click','.submit', function(event){
      event.preventDefault();
      var newPic = new ItemModel ({
        image: $('.urlinput').val(),
        caption:  $('.titleinput').val(),

      });
        newPic.save();

  });
