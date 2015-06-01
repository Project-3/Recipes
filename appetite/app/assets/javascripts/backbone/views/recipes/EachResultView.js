var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// Called on by SearchRecipesView to render each search result
Appetite.Views.EachResultView = Backbone.View.extend({
	tagName: "div",

	initialize: function(){
	 	this.template = _.template($("#recipe-result").html());
	 	this.listenTo(this.model, "sync remove", this.render);
	},

	events: {
		"click .save-button" : "saveRecipe",
		"click .read-more" : "showInstructions"
	},

	// recipe instructions are intially hidden; triggered by read more button
	showInstructions: function(e) {
		this.$(".recipe-instructions").show();
	},
	
	// triggered when save button is clicked
	saveRecipe: function(e) {
		// get values and save recipe
		var apiId = e.currentTarget.id;
		var name = this.$(".recipe-name").html();
		var userId = this.$(".user_id").val();
		var ingredients = this.$(".recipe-ingredients").html();
		var instructions = this.$(".recipe-instructions").html();
		var inventoriesIds = this.$(".inventories_ids").val();

		// instaniating a new collection for model to be added
		var recipe_model = new Appetite.Collections.Recipes;
		// params that need to be passed to Rails recipes controller
	   	recipe_model.create({
	    	name: name,
	    	api_id: apiId,
	    	user_id: userId,
	    	instructions: instructions,
	    	active: true,
	    	ingredients: ingredients.replace(/<br>/g, "\r\n"),
	    	inventories: inventoriesIds
	    });	
	    alert("Recipe for "+name+" saved!");
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model}));
		return this;
	}
});




