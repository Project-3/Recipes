var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// Called on by AllRecipeView to render each saved recipe
Appetite.Views.RecipeView = Backbone.View.extend({
	tagName: "div",

	initialize: function(){
	 	this.template = _.template($("#each-recipe").html());
	 	this.listenTo(this.model, "sync remove", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	},

	events: {
		"click .activate-butt" : "recipeUpdate",
		"click .delete-butt": "deleteRecipe" 
	},
	
	// toggles activeness of a recipe
	recipeUpdate: function(){
		this.model.toggle();		
	},

	// deletes recipe
	deleteRecipe: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		return this;
	}
});

