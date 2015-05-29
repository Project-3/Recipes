var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};
Appetite.Models.Inventory = Backbone.Model.extend({
	urlRoot: "/user/inventories",
	defaults: {
  	avail: true
  }
});
