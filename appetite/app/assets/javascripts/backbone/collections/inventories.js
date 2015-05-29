var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Collections.Inventories = Backbone.Collection.extend({
  model: Appetite.Models.Inventory,
  url: "/user/inventories",
  defaults: {
  	avail: true
  },

  // filter for only protein group
  byGroup: function(group) {
    filtered = this.filter(function(coll) {
      return coll.get("group") === group;
    });
    return new Appetite.Collections.Inventories(filtered);
  },

});
