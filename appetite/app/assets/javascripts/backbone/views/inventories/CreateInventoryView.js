var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.CreateInventoryView = Backbone.View.extend({
	el: "div#content",

	initialize: function(){
	 	this.template = _.template($("#create-inventory").html());
	},

	// just rendering form so no parameters needed
	render: function(){
		this.$el.html(this.template({}));
		return this;
	}
	
});