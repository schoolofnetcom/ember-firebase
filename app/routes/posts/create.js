import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(model) {
      let newPost = this.store.createRecord('post', model);
      newPost.save();
      this.transitionTo('posts');
    }
  },
  model() {
    return {};
  }
});
