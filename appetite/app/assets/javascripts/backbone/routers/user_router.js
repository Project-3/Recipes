var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Routers.UserRouter = Backbone.Router.extend({
	// maybe add a route welcoming new users with directions to use site
	routes : {
		"" : "activeRecipe",
		"recipes" : "allRecipes",
		"recipe/:recipe_id" : "showRecipe",
		"inventory" : "allInventory",
		// "inventory/new":"allInventory",
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
		var oneRecipe = new Appetite.Models.Recipe({id: recipe_id});
		oneRecipe.fetch({
			success: function(model, response) {
				new Appetite.Views.ShowRecipeView({model: model});
			}
		});
	},

	allInventory: function() {
		var content = $("#content");
		content.html("");
		var inventoryColl = new Appetite.Collections.Inventories();
		inventoryColl.fetch({
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
		var oneInvent = new Appetite.Models.Inventory({id: inventory_id});
		oneInvent.fetch({
			success: function(model, response) {
				new Appetite.Views.ShowInventoryView({model: model});
			}
		});
	},

	searchRecipes: function() {
		var checkedBoxes = [];
		$('input[name=ingredients]:checked').map(function() {
		    checkedBoxes.push($(this).val());
		});

		// finding all checked boxes and unchecking them
		$('.checked-ingredient').each(function() {
            $(this).attr('checked',!$(this).attr('checked'));
        });

		var content = $("#content");
		content.html("");


		// ajax call to server to make request to api and send back data
		$.ajax({
			type: "GET",
    		url: "/user/inventories/search",
    		data: {ingredients: checkedBoxes},
		    success: function(response) {
		    	console.log(response)
		    	new Appetite.Views.SearchRecipesView({collection: response});
		    }
		});
	}

});












