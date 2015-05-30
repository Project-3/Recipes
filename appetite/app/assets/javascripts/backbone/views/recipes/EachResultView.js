var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.EachResultView = Backbone.View.extend({
	tagName: "div",

	initialize: function(){
	 	this.template = _.template($("#recipe-result").html());
	 	this.listenTo(this.model, "sync", this.render);
	},

	events: {
		"click .save-button" : "saveRecipe",
	},
	

	saveRecipe: function(){
		// get values and save 	
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model}));
		return this;
	}
});