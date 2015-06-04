var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// All the active recipes view; if any, user is brought here on log-in
Appetite.Views.ActiveRecipeView = Backbone.View.extend({
	el: "div#content",

	initialize: function(){
		this.listenTo(this.collection, "sync remove", this.render);
	},

	render: function(collection){
		var div = this.$el;
		div.html("");

		// checks to make sure there are active recipes else the user is redirected to inventory
		if (this.collection.where({"active": true}).length < 1 ) {
			userRouter.navigate("inventory", {trigger: true});
		} else {
			div.append(	"<h1>Active Recipes:</h1>")
			this.collection.active(true).each(function(recipe) {
				div.append(new Appetite.Views.EachActiveView({model: recipe}).render().$el);
			});
			return this;
		}
	}
	
});