// ( app/controllers/friends/base.js )

import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'twitter',
    function () {
      return !Ember.isEmpty(this.get('model.email')) &&
        !Ember.isEmpty(this.get('model.firstName')) &&
        !Ember.isEmpty(this.get('model.lastName')) &&
        !Ember.isEmpty(this.get('model.twitter'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var that = this;
        this.get('model').save().then(function(friend) {
          that.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }

      return false;
    },
    cancel: function() {
      return true;
    }
  }  
});
