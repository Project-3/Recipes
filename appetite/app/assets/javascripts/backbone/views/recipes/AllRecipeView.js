var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.AllRecipeView = Backbone.View.extend({
	el: "#content",
	initialize: function(){
		this.listenTo(this.collection, "sync remove", this.render);
	},

	// render list of recipies in Recipe Collection
	render: function(){
		var div = this.$el;
		div.html("");

<<<<<<< HEAD
		this.collection.each(function(recipe){
=======
		this.collection.protien().each(function(recipe){
>>>>>>> backbone
			div.append(new Appetite.Views.RecipeView({model: recipe}).render().$el);
		});
		return this;
	}
});
