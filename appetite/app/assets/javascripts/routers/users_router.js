var UserRoutes = Backbone.Router.extend({
	routes : {
		"" : "activeRecipe",
		"recipes" : "allRecipes",
		"recipe/:recipe_id" : "showRecipe"
		"inventory" : "allInventory",
		"inventory/:inventory_id" : "showInventory",
		"search": "searchRecipes"

	},

	activeRecipe: function() {
		var content = $("#content");
		content.html("");
		mainPage.fetch();
		new activeRecipeView({collection: mainPage}).render();
	},

	allRecipes: function() {
		var content = $("#content");
		content.html("");
		mainPage.fetch({
			success: function(model, response) {
				new allRecipeView({collection: mainPage["recipe"]}).render();
			}
		});
	},

	// do a select or pluck of mainPage for recipe_id associated things
	showRecipe: function(recipe_id) {
		var content = $("#content");
		content.html("");
		mainPage.fetch({
			success: function(model, response) {
				new showRecipeView({collection: mainPage}).render();
			}
		});
	},

	allInventory: function() {
		var content = $("#content");
		content.html("");
		mainPage.fetch({
			success: function(model, response) {
				new allInventoryView({collection: mainPage["inventory"]}).render();
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
		var content = $("#content")
		content.html("")
		new searchRecipesView().render;
	}

});

var userRoutes = new UserRoutes();
Backbone.history.start();










