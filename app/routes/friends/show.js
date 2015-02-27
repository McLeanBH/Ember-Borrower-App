import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(friend) {
      var that = this;

      friend.destroyRecord().then(function() {
        that.transitionTo('friends.index');
      });
    }
  }
});
