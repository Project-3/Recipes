var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.SearchRecipesView = Backbone.View.extend({
	el: "#content",
	initialize: function(){
		this.listenTo(this.collection, "sync", this.render);
		this.render();
	},

	// render list of recipes from ajax call to api
	render: function(){
		console.log(this.collection)
		var div = this.$el;
		div.html("");

		if (this.collection.results.length < 1) {
			div.html("<h2 style='color: red'>**Your search did not render any results.</h2>");
		} else {
		// looping array of response to append to dom
			this.collection.results.forEach(function(recipe){
				div.append(new Appetite.Views.EachResultView({model: recipe}).render().$el);
			});
			return this;
		}
	}
});

	