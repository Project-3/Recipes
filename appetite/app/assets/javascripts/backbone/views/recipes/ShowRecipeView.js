var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.ShowRecipeView = Backbone.View.extend({
	el: "div#content",
	initialize: function(){
		this.template = _.template($("#show-recipe").html());
		this.listenTo(this.model, "sync", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	 	this.render();
	},

	events: {
		"click .activate-butt" : "recipeUpdate",
		"click .delete-butt": "deleteRecipe" 
	},
	

	recipeUpdate: function(){
		this.model.toggle();
			
	},

	deleteRecipe: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		return this;
	}
	
});