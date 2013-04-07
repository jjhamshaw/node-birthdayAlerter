/*global define*/
define(function(require) {
  var $ = require('jquery'),
      Backbone = require('backbone'),
      AppView = require('../views/app');

  return Backbone.Router.extend({
  	routes: {
  		'': 'index'
  	},

  	index: function(){
  		new AppView;
  	}
    
  })
});