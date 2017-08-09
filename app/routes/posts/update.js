import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(model) {
      model.save();
      this.transitionTo('posts');
    }
  },
  model: function(params) {
    return this.store.findRecord('post', params.id);
  }
});
