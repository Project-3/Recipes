var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.ShowRecipeView = Backbone.View.extend({
	el: "div#content",

	initialize: function(){
		// need to add a show recipe template...on Nat's computer?
	 	this.template = _.template($("#each-recipe").html());
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