var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.ShowInventoryView = Backbone.View.extend({
	el: "div#content",

	initialize: function(){
	 	this.template = _.template($("#show-inventory").html());
	 	this.listenTo(this.model, "sync", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	},

	events: {
		"click .delete-butt" : "deleteItem",
		"click .search-butt" : "searchInvent",
		"click .avail-butt" : "switchItem"
	},

	switchItem: function() {
		this.model.toggle();
	},
	
	searchInvent: function(){
		if ($('.checked-ingredient').is(":checked") == true) {
			userRouter.navigate("search", {trigger: true});
		} else {
			alert("Please check all ingredients you would like to use in your dish.")
		}
	},

	deleteItem: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.html(this.template({inventory: this.model.toJSON()}));
		return this;
	}
	
});