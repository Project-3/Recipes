Appetite.Views.RecipeView = Backbone.View.extend({
	tagName: "div",

	template: _.template($("#all-recipies").html()),
	
	events: {"click .recipe_title": "recipeShow",
		"click .delete_butt": "deleteRecipe" },
	
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