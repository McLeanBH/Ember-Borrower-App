// ( app/controllers/friends/new.js )

import Ember from 'ember';



export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute('friends.index');
      return false;
    }
  }
});

// after rendering app/controller/friends/base/: We left isValid and save exactly as they were,
// but we have no implementation in the cancel action (we just let it bubble up).
// We can now replace app/controllers/friends/new.js to inherit from base and override the cancel action:
// removed the code below, as 'computer' & 'save' are inherited from base. 

  // isValid: Ember.computed(
  //   'model.email',
  //   'model.firstName',
  //   'model.lastName',
  //   'model.twitter',
  //   function() {
  //     return !Ember.isEmpty(this.get('model.email')) &&
  //       !Ember.isEmpty(this.get('model.firstName')) &&
  //       !Ember.isEmpty(this.get('model.lastName')) &&
  //       !Ember.isEmpty(this.get('model.twitter'));
  //   }
  // ),
  // (pg.31) Ember.computer and the rest of above allows us to create
  // fxns that will be treated as properties (computed properties).
  // When any of these properties change, the function that we passed-in is
  // called and the value of our property is updated with the returned value.
  // Above, we are manually checking that all fields are not empty with 'isEmpty' helper.

  // With our native validation in place, we can now modify the save & cancel actions below.

  //   actions: {
  //     save: function() {
  //       // console.log('+- save action in friends new controller');
  //       if (this.get('isValid')) {
  //         var that = this;
  //         this.get('model').save().then(function(friend) {
  //           that.transitionToRoute('friends.show', friend);
  //         });
  //       } else  {
  //         this.set('errorMessage', 'You have to fill all the fields');
  //       }
  //
  //       return false;
  //     },
  //     cancel: function() {
  //       // console.log('+- cancel action in friends new controller');
  //       this.transitionToRoute('friends');
  //
  //       return false;
  //     }
  //   }
  // });

  /// (pgs.31-32) NOTES TO WHAT'S GOING ON HERE: When the action save is called,
  // we are first checking if isValid is true. If it is, then we get the model and call .save().
  // The return of save() is a promise, which allow us to write asynchronous code in a sync manner.
  // The function .then receives a function that will be called when the model has been saved
  // successfully to the server. When this happens, it returns an instance of our friend
  // and then we can transition to the route FriendsShowRoute to see our friend’s profile.
  // If we click save and have filled all the required fields, we’ll still get an error:
  // The route friends.show was not found. This is because we haven’t defined a Friends Show Route.
