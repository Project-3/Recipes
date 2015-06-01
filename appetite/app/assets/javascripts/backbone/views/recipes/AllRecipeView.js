var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// All of users saved recipes, active or inactive
Appetite.Views.AllRecipeView = Backbone.View.extend({
	el: "#content",
	initialize: function(){
		this.listenTo(this.collection, "sync remove", this.render);
	},

	// render list of recipes in Recipe Collection
	render: function(){
		var div = this.$el;
		div.html("");

		this.collection.each(function(recipe){
			div.append(new Appetite.Views.RecipeView({model: recipe}).render().$el);
		});
		return this;
	}
});

 