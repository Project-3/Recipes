var Appetite = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

var mainPage;

_.templateSettings = {
		 evaluate    : /\{\{([\s\S]+?)\}\}/g,
		 interpolate : /\{\{=([\s\S]+?)\}\}/g,
		 escape      : /\{\{-([\s\S]+?)\}\}/g
	};

Appetite.initialize = function() {
	// if (mainPage === undefined) {
		mainPage = mainPage || new Appetite.Collections.Recipes();
	// }
	// new Appetite.Views.ActiveRecipe({collection: mainPage});
	var userRoutes = new Appetite.Routers.User();
	Backbone.history.start();
};

$(document).ready(function(){
		Appetite.initialize();
	});

