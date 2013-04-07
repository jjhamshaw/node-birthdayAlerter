define(function(require) {
  var $ = require('jquery'),
      Backbone = require('backbone'),
      _ = require('underscore'),
      Template = _.template(require('text!../templates/bdaylist.html')),
      NextBirthdayView = require('./nextBirthday')
      ;

  return Backbone.View.extend({
    el: '#content',
    initialize: function() {
      this.nextBirthday = new NextBirthdayView();

      this.$el.append(this.nextBirthday.render());
      //this.$el.html(Template({message:'blah'}));

    },

    render: function() {
      return this.$el;
    }
  })
});