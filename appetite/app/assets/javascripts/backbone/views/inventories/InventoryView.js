Appetite.Views.InventoryView = Backbone.View.extend({
	tagName: 'div',
	initialize: function(){
	 	this.template = _.template($("#show-inventory").html());
		this.render();
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
		this.$el.html(this.template({inventory: this.model.toJSON()}));
		return this
	}
});
