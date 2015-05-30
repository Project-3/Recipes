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
	},

	render: function(collection){
		var div = this.$el;
		div.html("");
		if (collection.active(true).length < 1 ) {
			userRouter.navigate("inventory", {trigger: true});
		} else {

			this.collection.active(true).each(function(recipe) {
				div.append(new Appetite.Views.RecipeView({model: recipe}).render().$el);
			});
			return this;
		}
	}
	
});