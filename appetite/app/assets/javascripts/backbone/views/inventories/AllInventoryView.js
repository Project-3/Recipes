Appetite.Views.InventoryView = Backbone.View.extend({
	el: "#content",
	initialize: function() {
		this.listen(this.collection, "sync remove", this.render);
	},

	render: function() {
		var div = this.$el;
		div.html("");

		this.collection.each(function(inventory) {
			div.append(new InventoryView({model: inventory}).render.$el);
		});
		return this;

	}
});