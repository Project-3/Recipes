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
		"recipe/:recipe_id" : "showRecipe",
		"recipes" : "allRecipes",
		"inventory/:inventory_id" : "showInventory",
		"inventory" : "allInventory",
		"search": "searchRecipes"
	},

	// root page: all of user's active recipes
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
	
	// all of user's saved recipes
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

	// fetching a single model and instaniate view for one recipe
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

	// user's total inventory view
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

	// search view based on ingredients selected
	searchRecipes: function() {
		var checkedBoxes = [];
		var checkedIds = [];

		// mapping through all checked ingredients
		$('input[name=ingredients]:checked').map(function() {
			// pushing ingredient names into checkedBoxes array
		    checkedBoxes.push($(this).val());
		    // pushing ingredient ids into checkedIds array
		    checkedIds.push(parseInt($(this).attr("id")));
		});

		// makes sure that something was searched
		if (checkedIds.length > 0) {
			// grabbing the user_id -- will need it to save recipe
			var user_id = $("#hidden-userId").val();

			// finding all checked boxes and unchecking them; may not be necessary
			$('.checked-ingredient').each(function() {
	            $(this).attr('checked',!$(this).attr('checked'));
	        });

			// clearing content area for new view
			var content = $("#content");
			content.html("");

			// ajax call to server to make request to api and send back data
			$.ajax({
				type: "GET",
	    		url: "/user/inventories/search",
	    		contentType: "application/json; charset=utf-8",
	    		data: {ingredients: checkedBoxes},
			    success: function(response) {
				    var recipes = response[0].results

			    	// putting user_id and all related inventory ids into response object
			    	recipes.forEach(function(recipe){
			    		recipe.user_id = parseInt(user_id);
			    		recipe.inventories_ids = checkedIds;
			    	});

			    	// looping through recipe response to insert an image
			    	// first case: if there are more images than recipes
			    	if (JSON.parse(response[1]).recipes.length > recipes.length) {
				    	for (var i = 0; i < recipes.length; i++) {
				    		recipes[i].image = JSON.parse(response[1]).recipes[i].image_url
				    	}
				    } else {
				    	// case two: if there are more recipes than images
				    	for (var i = 0; i < JSON.parse(response[1]).recipes.length; i++) {
				    		recipe[i].image = JSON.parse(response[1]).recipes[i].image_url
				    	}
				    	for (var i = JSON.parse(response[1]).recipes.length; i < recipes.length; i++) {
				    		recipe[i].image = JSON.parse(response[1]).recipes[0].image_url
				    	}
				    }

			    	// instantiating the view for all search results
			    	new Appetite.Views.SearchRecipesView({collection: recipes});
			    }
			});
		} else {
			// For the people that decide to refresh on a search page where search results are not persisted
			alert("Please start a new search from your Inventory page.")
		}
	}
});






