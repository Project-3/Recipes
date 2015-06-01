var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Collections.Inventories = Backbone.Collection.extend({
  model: Appetite.Models.Inventory,
  url: "/user/inventories",

  // function to filter for one group 
  byGroup: function(group) {
    filtered = this.filter(function(coll) {
      return coll.get("group") === group;
    });
    return new Appetite.Collections.Inventories(filtered);
  }

});
