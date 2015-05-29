var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.InventoryView = Backbone.View.extend({
	tagName: 'div',
	initialize: function(){
	 	this.template = _.template($("#showInventory").html());
	},
	events: {
		"click button.avail": "availInv",
		"click button.delete_butt": "deleteInv",
		"click button.search_butt": "searchInv",
	}, 

	availInv: function() {
	// avail boolean
	// available value = true/false
	// this.model.save
	},

	deleteInv: function() {
		this.model.destroy();
	},

	searchInv: function () {
		
	},

	render: function() {
		console.log(this.model.toJSON());
		this.$el.html(this.template({inventory: this.model.toJSON()}));
		return this
	}
});
