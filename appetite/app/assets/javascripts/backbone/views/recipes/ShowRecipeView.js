var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.ShowRecipeView = Backbone.View.extend({
	tagName: "div",

	initialize: function(){
	 	this.template = _.template($("#show-recipe").html());
	 	this.render();
	},

	events: {},
	
	recipeShow: function(){
		

	},

	deleteRecipe: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		return this;
	}
	
});