var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.ActiveRecipeView = Backbone.View.extend({
	el: "div#content",

	initialize: function(){
		this.listenTo(this.collection, "sync remove", this.render);
	 	// this.template = _.template($("#active-recipe").html());
	},

	// events: {"click .recipe_title": "recipeShow",
	// 	"click .delete_butt": "deleteRecipe" },
	
	// recipeShow: function(){
		

	// },

	// deleteRecipe: function(){
	// 	this.model.destroy();
	// },

	render: function(collection){
		var div = this.$el;
		div.html("");

		if (collection.active.length < 1 ) {
			userRouter.navigate("inventory", {trigger: true});
		} else {
			this.collection.each(function(recipe) {
				div.append(new Appetite.Views.RecipeView({model: recipe}).render().$el);
			});
			return this;
		}
	}
	
});