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
	 	this.render();
	},

	events: {},
	
	// recipeShow: function(){
		

	// },

	deleteRecipe: function(){
		this.model.destroy();
	},

	render: function(){
		// var recipe = this.model.toJSON()
		// var template = _.template($("#show-recipe").html(),{recipe: recipe});
		// console.log(this.model)
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		console.log(this.model)
		return this;
	}
	
});