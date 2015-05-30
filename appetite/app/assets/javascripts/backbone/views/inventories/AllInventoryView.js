var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.AllInventoryView = Backbone.View.extend({
	el: "div#content",
	initialize: function() { 
		this.listenTo(this.collection, "sync remove", this.render);
	},

	render: function() {
		var div = this.$el;
		div.html("");

		// will there be an asynchronous issue?

		// rendering ingredients to dom sorted by group		
		div.append("<h2>Protein</h2>")
		this.collection.byGroup("protein").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		div.append("<hr>")
		div.append("<h2>Produce</h2>")
		this.collection.byGroup("produce").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		div.append("<hr>")
		div.append("<h3>Dairy</h3>")
		this.collection.byGroup("dairy").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		div.append("<hr>")
		div.append("<h3>Grain</h3>")
		this.collection.byGroup("grain").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		return this;
	}
});







