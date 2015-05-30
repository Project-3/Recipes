var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.SearchRecipesView = Backbone.View.extend({
	el: "#content",
	initialize: function(){
		this.listenTo(this.collection, "sync remove", this.render);
	},

	// render list of recipes from ajax call to api
	render: function(){
		var div = this.$el;
		div.html("");

		// looping array of response to append to dom
		this.collection.each(function(recipe){
			div.append(new Appetite.Views.RecipeView({model: recipe}).render().$el);
		});
		return this;
	}
});

	