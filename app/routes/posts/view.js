import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findByIds('post', [params.id]);
  }
});
