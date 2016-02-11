import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let kw = Ember.Object.create({name: "Kanye West"});
    let lg = Ember.Object.create({name: "Lady Gaga"});
    this.artists = [kw, lg]
    return this.artists
    // return [kw, lg];
  },

  actions: {
    addArtist(artistName){
      let newArtist = Ember.Object.create({name: artistName})
      debugger;
      this.modelFor(this.routeName).pushObject(newArtist)
      console.log(this);
      this.controller.set("artistName", "HEY GUYS")
    }
  }
});
