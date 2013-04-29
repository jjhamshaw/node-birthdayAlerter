define(function(require) {
  var $ = require('jquery'),
      Backbone = require('backbone'),
      _ = require('underscore'),
      NextBirthdayView = require('./nextBirthdays')
      CurrentBirthdayView = require('./currentBirthdays')
      ;

  return Backbone.View.extend({
    el: '#content',
    initialize: function() {
      this.nextBirthdays = new NextBirthdayView();
      this.currentBirthdays = new CurrentBirthdayView();

      this.$el.append(this.nextBirthdays.render());
      this.$el.append(this.currentBirthdays.render());

      //this.$el.html(Template({message:'blah'}));

    },

    render: function() {
      return this.$el;
    }
  })
});