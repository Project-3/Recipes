var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.EachActiveView = Backbone.View.extend({
	tagName: "div",

	initialize: function(){
	 	this.template = _.template($("#active-recipe").html());
	 	this.listenTo(this.model, "sync", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	},

	events: {
		"click .activate-butt" : "recipeUpdate",
		"click .delete-butt": "deleteRecipe" 
	},

	recipeUpdate: function(){
		this.model.toggle();
			
	},

	deleteRecipe: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		return this;
	}
});