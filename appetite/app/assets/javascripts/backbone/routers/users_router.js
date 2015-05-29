var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Routers.User = Backbone.Router.extend({
	routes : {
		"" : "activeRecipe",
		"recipes" : "allRecipes",
		"recipe/:recipe_id" : "showRecipe",
		"inventory" : "allInventory",
		"inventory/:inventory_id" : "showInventory",
		"search": "searchRecipes"

	},

	activeRecipe: function() {
		var content = $("#content");
		content.html("");
		var mainPage = new Appetite.Collections.Recipes();
		mainPage.fetch({
			success: function() {
				new Appetite.Views.ActiveRecipe({collection: mainPage})
			},
			error: function(){
				new Error({message: "Error loading user."})
			}
		});
		// var act_recp = new Appetite.Views.ActiveRecipe({ el: $("#content"), collection: mainPage})
		// mainPage.fetch();
	},

	allRecipes: function() {
		// var content = $("#content");
		// content.html("");
		// mainPage.fetch({
		// 	success: function(model, response) {
		// 		new allRecipeView({collection: mainPage["recipe"]}).render();
		// 	}
		// });
	},

	// do a select or pluck of mainPage for recipe_id associated things
	showRecipe: function(recipe_id) {
		// var content = $("#content");
		// content.html("");
		// mainPage.fetch({
		// 	success: function(model, response) {
		// 		new showRecipeView({collection: mainPage}).render();
		// 	}
		// });
	},

	allInventory: function() {
		// var content = $("#content");
		// content.html("");
		// mainPage.fetch({
		// 	success: function(model, response) {
		// 		new allInventoryView({collection: mainPage["inventory"]}).render();
		// 	}
		// });
	},

	// do a select or pluck of mainPage for inventory_id associated things
	showInventory: function(inventory_id) {
		// var content = $("#content");
		// content.html("");
		// mainPage.fetch({
		// 	success: function(model, response) {
		// 		new showInventoryView({collection: mainPage}).render();
		// 	}
		// });
	},

	searchRecipes: function() {
		// var content = $("#content")
		// content.html("")
		// new searchRecipesView().render;
	}

});











