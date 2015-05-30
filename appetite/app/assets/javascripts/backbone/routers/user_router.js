var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

var secrets = require("../secrets.json");
var apiToken = secrets["apiToken"];

Appetite.Routers.UserRouter = Backbone.Router.extend({
	// maybe add a route welcoming new users with directions to use site
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
		var checkedBoxes = this.$('input:checked');
		$.ajax({
    		url: "http://www.weeatt.com/api/v1/recipes?qs="+checkedBoxes+"&auth_token="+apiToken,
    		headers: {
		    	"ACCEPT": "application/json",
		    	"CONTENT-TYPE": "application/json"
		    	"x-api-key": "78861666c8ba"
		    }
		});

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












