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

	// activeRecipe: function() {
	// 	var content = $("#content");
	// 	content.html("");
	// 	var mainPage = new Appetite.Collections.Recipes();
	// 	mainPage.fetch({
	// 		success: function(collection, response, options) {
	// 			console.log("activeRecipe");
	// 			new Appetite.Views.ShowRecipeView({collection: collection.where({active: true})});
	// 		},
	// 		error: function(){
	// 			new Error({message: "Error loading user."})
	// 		}
	// 	});
	// },

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
		var content = $("#content");
		content.html("");
		var mainPage = new Appetite.Collections.Inventories();
		mainPage.fetch({
			success: function(collection, response, options) {
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
		// var content = $("#content")
		// content.html("")
		// new searchRecipesView().render;
	}

});












