Appetite.Routers.Users = Backbone.Router.extend({
	routes : {
		"" : "activeRecipe",
		"recipes" : "allRecipes",
		"recipe/:recipe_id" : "showRecipe"
		"inventory" : "allInventory",
		"inventory/:inventory_id" : "showInventory"

	},

	activeRecipe: function() {
		var content = $("#content");
		content.html("");
		mainPage.fetch({
			success: function(model, response) {
				 	if response["recipe"][0]
						new activeRecipeView({active: mainPage}).render();
					else 
						new activeRecipeView({active: false}).render();
				});	
			}
		});
	},

	allRecipes: function() {
		var content = $("#content");
		content.html("");
		mainPage.fetch({
			success: function(model, response) {
					new activeRecipeView({user: mainPage["recipe"]}).render();
				});
			}
		});
	},

	// do a select or pluck of mainPage for recipe_id associated things
	showRecipe: function(recipe_id) {
		var content = $("#content");
		content.html("");
		mainPage.fetch({
			success: function(model, response) {
					new activeRecipeView({user: mainPage}).render();
				});
			}
		});
	},

	allInventory: function() {
		var content = $("#content");
		content.html("");
		mainPage.fetch({
			success: function(model, response) {
					new activeRecipeView({user: mainPage["inventory"]}).render();
				});
			}
		});
	},

	// do a select or pluck of mainPage for inventory_id associated things
	showInventory: function(inventory_id) {
		var content = $("#content");
		content.html("");
		mainPage.fetch({
			success: function(model, response) {
					new activeRecipeView({user: mainPage}).render();
				});
			}
		});
	}

});
