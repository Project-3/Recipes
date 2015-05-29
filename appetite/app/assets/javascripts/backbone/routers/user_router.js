var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Routers.UserRouter = Backbone.Router.extend({
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
		var activeRecipes = new Appetite.Collections.Recipes();
		activeRecipes.fetch({
			success: function(collection) {
				new Appetite.Views.ActiveRecipeView({collection: collection});
			},
			error: function(){
				new Error({message: "Error loading user."})
			}
		});
	},

	allRecipes: function() {
		var content = $("#content");
		content.html("");
		var recipesColl = new Appetite.Collections.Recipes();
		recipesColl.fetch({
			success: function(collection) {
				new Appetite.Views.AllRecipeView({collection: collection})
			}
		});
	},

	// fetching a single model and instaniate view
	showRecipe: function(recipe_id) {
		var content = $("#content");
		content.html("");
		var oneRecipe = new Appetite.Models.Recipe(recipe_id);
		oneRecipe.fetch({
			success: function(model, response) {
				new ShowRecipeView({model: model})
			}
		});
	},

	allInventory: function() {
		var content = $("#content");
		content.html("");
		var mainPage = new Appetite.Collections.Inventories();
		mainPage.fetch({
			success: function(collection) {
				new Appetite.Views.AllInventoryView({collection: collection});
			},
			error: function(){
				new Error({message: "Error loading user."})
			}
		});
	},

	// do a select or pluck of mainPage for inventory_id associated things
	showInventory: function(inventory_id) {
		var content = $("#content");
		content.html("");
		mainPage.fetch({
			success: function(model, response) {
				new showInventoryView({collection: mainPage}).render();
			}
		});
	},

	searchRecipes: function() {
		var content = $("#content");
		content.html("");
		var searchResults // place ajax call here

		// in ajax call, instaniate below view upon success of call 

		// searchResults.fetch({
		// 	success: function(collection) {
		// 		new Appetite.Views.SearchRecipesView({collection: collection})
		// 	}
		// });
	}

});












