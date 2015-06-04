var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// All search results view
Appetite.Views.SearchRecipesView = Backbone.View.extend({
	el: "#content",
	initialize: function(){
		this.listenTo(this.collection, "sync remove", this.render);
		this.render();
	},

	// render list of recipes from ajax call to api
	render: function(){
		var div = this.$el;
		div.html("");

		// if there are no search results returned
		if (this.collection.length < 1) {
			div.html("<h2 style='color: red'>** Your search did not render any results. **</h2>");
		} else {
			// appending first pic from response to dom
			var search_pic = this.collection[0].image
			div.append("<img class='search_pic' src="+search_pic+">")

			// looping array of response to append to dom
			this.collection.forEach(function(recipe){
				div.append(new Appetite.Views.EachResultView({model: recipe}).render().$el);
			});
		}
	}
});

	