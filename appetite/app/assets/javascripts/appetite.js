window.Appetite = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		var mainPage= new Appetite.Collections.Users();
		new Appetite.Views.ActiveRecipe();
		var userRoutes = new Appetite.Routers.User();
		Backbone.history.start();
	}
};

$(document).ready(function(){
	Appetite.initialize();
});
