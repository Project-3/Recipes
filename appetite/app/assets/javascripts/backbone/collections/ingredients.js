var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Collections.Inventories = Backbone.Collection.extend({
  model: Appetite.Models.Inventories,
  url: "/user/inventories"
});