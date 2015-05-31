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
		"click .dectivate-butt" : "recipeUpdate",
		"click .delete-butt": "deleteRecipe",
		"click .avail-butt": "toggleInventory"
	},

	recipeUpdate: function(){
		this.model.toggle();	
	},

	deleteRecipe: function(){
		this.model.destroy();
	},

	toggleInventory: function() {
		
	}

	render: function(){
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		return this;
	}
});


