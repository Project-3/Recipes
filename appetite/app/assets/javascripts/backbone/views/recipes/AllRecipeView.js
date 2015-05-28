Appetite.Views.AllRecipeView = Backbone.View.extend({
	el: "#content",
	initialize: function(){
		this.listen(this.collection, "sync remove", this.render);
	},

	// render list of recipies in Recipe Collection
	render: function(){
		var div = this.$el;
		div.html("");

		this.collection.each(function(recipe){
			div.append(new RecipeView({model: recipe}).render.$el);

		});
		return this;

	}
});
