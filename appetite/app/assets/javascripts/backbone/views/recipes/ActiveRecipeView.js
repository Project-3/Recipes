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

		if (this.collection.where({"active": true}).length < 1 ) {
			userRouter.navigate("inventory", {trigger: true});
		} else {
			div.append(	"<h2>Active Recipes:</h2>")
			this.collection.active(true).each(function(recipe) {
				div.append(new Appetite.Views.EachActiveView({model: recipe}).render().$el);
			});
			return this;
		}
	}
	
});