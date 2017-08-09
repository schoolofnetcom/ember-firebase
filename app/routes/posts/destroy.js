import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(model) {
      model.destroyRecord();
      this.transitionTo('posts');
    },
    goBack() {
      this.transitionTo('posts');
    }
  },
  model: function(params) {
    return this.store.findRecord('post', params.id);
  }
});
