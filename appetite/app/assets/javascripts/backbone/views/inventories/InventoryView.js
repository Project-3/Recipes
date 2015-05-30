var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.InventoryView = Backbone.View.extend({
	tagName: 'div',
	initialize: function(){
	 	this.template = _.template($("#each-inventory").html());
	 	this.listenTo(this.model, "sync", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	},
	events: {
		"click button.avail": "availInv",
		"click button.delete-butt": "deleteInv",
		"click button.search-butt": "searchInv",
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
		userRouter.navigate("search", {trigger: true});
	},

	render: function() {
		this.$el.html(this.template({inventory: this.model.toJSON()}));
		return this;
	}
});
