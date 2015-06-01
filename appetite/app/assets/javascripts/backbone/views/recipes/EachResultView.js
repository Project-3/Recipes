var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.EachResultView = Backbone.View.extend({
	tagName: "div",

	initialize: function(){
	 	this.template = _.template($("#recipe-result").html());
	 	this.listenTo(this.model, "sync", this.render);
	 	// this.listenTo(this.model, "re", this.remove);
	},

	events: {
		"click .save-button" : "saveRecipe"
	},
	
	saveRecipe: function(e){
		// get values and save recipe
		var api_id = e.currentTarget.id;
		var name = this.$(".recipe-name").html();
		var user_id = this.$(".user_id").val();
		var ingredients = this.$(".recipe-ingredients").html();
		var instructions = this.$(".recipe-instructions").html();
		var inventories_ids = this.$(".inventories_ids").val();

		var recipe_model = new Appetite.Collections.Recipes;

	    recipe_model.create({
	    	name: name,
	    	api_id: api_id,
	    	user_id: user_id,
	    	instructions: instructions,
	    	active: true,
	    	ingredients: ingredients.replace(/<br>/g, "\r\n"),
	    	inventories: inventories_ids
	    });	
	    
	    // how can I remove it from the dom....parent node?
	    // this.model.remove();
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model}));
		return this;
	}
});




