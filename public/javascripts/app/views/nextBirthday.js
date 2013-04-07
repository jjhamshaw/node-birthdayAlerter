define(function(require){
  var $ = require('jquery'),
      Backbone = require('backbone'),
      _ = require('underscore'),
      Template = _.template(require('text!../templates/nextBirthday.html'));

  return Backbone.View.extend({
    initialize: function(){
      this.$el.html(Template());
    },
    render: function(){
      return this.$el;
    }
  })
});