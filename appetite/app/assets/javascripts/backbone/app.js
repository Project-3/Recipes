var mainPage;

_.templateSettings = {
		 evaluate    : /\{\{([\s\S]+?)\}\}/g,
		 interpolate : /\{\{=([\s\S]+?)\}\}/g,
		 escape      : /\{\{-([\s\S]+?)\}\}/g
	};
window.Appetite = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		if (mainPage === undefined) {
			mainPage = new Appetite.Collections.Users();
		}
		new Appetite.Views.ActiveRecipe({collection: mainPage});
		var userRoutes = new Appetite.Routers.User();
		Backbone.history.start();
	}
};


