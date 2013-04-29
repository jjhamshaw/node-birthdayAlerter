define(function(require){
  var $ = require('jquery'),
      Backbone = require('backbone'),
      _ = require('underscore'),
      Template = _.template(require('text!../templates/nextBirthdays.html'));

  return Backbone.View.extend({
    initialize: function(){
      var bdays = ['first', 'second', 'third'];
      this.$el.html(Template({birthdays: bdays}));

    },
    render: function(){
      return this.$el;
    }
  })
});