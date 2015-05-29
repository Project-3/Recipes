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
  protein: function() {
  	return this.where({group: "protein"});
  },
  // filter for only produce 
  produce: function() {
  	return this.where({group: "produce"});
  },
  // filter for only dairy
  dairy: function() {
  	return this.where({group: "dairy"});
  },
  // filter for only grain
  grain: function() {
  	return this.where({group: "grain"});
  }
});
