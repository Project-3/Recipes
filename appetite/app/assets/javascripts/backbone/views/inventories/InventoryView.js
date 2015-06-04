var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// All Inventories calls on this view or each inventory item
Appetite.Views.InventoryView = Backbone.View.extend({
	tagName: 'div',
	initialize: function(){
	 	this.template = _.template($("#each-inventory").html());
	 	this.listenTo(this.model, "sync", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	},
	events: {
		"click button.avail-butt": "availInv",
		"click button.delete-butt": "deleteInv"
	}, 

	availInv: function() {
		this.model.toggle();
	},

	deleteInv: function() {
		this.model.destroy();
	},

	render: function() {
		this.$el.html(this.template({inventory: this.model.toJSON()}));
		return this;
	}
});
