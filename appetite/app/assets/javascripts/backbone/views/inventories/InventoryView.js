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
		"click button.avail-butt": "availInv",
		"click button.delete-butt": "deleteInv",
		"click button.search-butt": "searchInv"
	}, 

	availInv: function() {
		this.model.toggle();
	},

	deleteInv: function() {
		this.model.destroy();
	},

	searchInv: function () {
		if ($('.checked-ingredient').is(":checked") == true) {
			userRouter.navigate("search", {trigger: true});
		} else {
			alert("Please check all ingredients you would like to use in your dish.")
		}
	},

	render: function() {
		this.$el.html(this.template({inventory: this.model.toJSON()}));
		return this;
	}
});
