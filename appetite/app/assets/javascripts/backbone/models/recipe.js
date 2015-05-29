var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Models.Recipe = Backbone.Model.extend({
	urlRoot: "/user/recipes"
});
