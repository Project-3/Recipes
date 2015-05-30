var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.ShowRecipeView = Backbone.View.extend({
<<<<<<< HEAD
	el: "div#content",

	initialize: function(){
		// need to add a show recipe template...on Nat's computer?
	 	this.template = _.template($("#each-recipe").html());
	 	this.render();
=======
	el: "#content",

	initialize: function(){
		this.template = _.template($("#show-recipe").html());
>>>>>>> backbone
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