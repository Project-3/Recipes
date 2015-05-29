Appetite.Views.AllInventoryView = Backbone.View.extend({
	el: "div#content",
	initialize: function() { 
		this.listenTo(this.collection, "sync remove", this.render);

	},


	render: function() {
		console.log(this.collection.models)
		var div = this.$el;
		div.html("");


		var protein = []
		var produce = []
		var dairy = []
		var grain = []

		this.collection.models.each(function(inventory) {
				console.log(collection)
			if (this.collection.models.attributes === "protein") {

				protein.push(this.collection.models)
				console.log(protein)
			}

		})

		this.collection.each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});
		return this;
	}
});