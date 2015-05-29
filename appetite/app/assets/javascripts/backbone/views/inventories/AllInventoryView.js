Appetite.Views.AllInventoryView = Backbone.View.extend({
	el: "div#content",
	initialize: function() {
		this.listenTo(this.collection, "sync remove", this.render);
	},

	render: function() {
		var div = this.$el;
		div.html("");

		this.collection.each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});
		return this;
	}
});