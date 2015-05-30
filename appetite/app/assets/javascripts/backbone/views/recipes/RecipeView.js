var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.RecipeView = Backbone.View.extend({
	tagName: "div",

	initialize: function(){
	 	this.template = _.template($("#each-recipe").html());
	 	this.listenTo(this.model, "sync", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	 	this.listenTo(this.model, "visible", this.toggleActive);
	 	this.render();

	},

	events: {"click .recipe_title": "recipeShow",
		"click .activate_butt" : "recipeUpdate",
		"click .delete_butt": "deleteRecipe" },
	

	recipeUpdate: function(){
		this.model.toggle();
	},

	toggleActive: function(){
		this.$el.toggleClass("hidden", this.inActive());
	},

	inActive: function(){
		this.model.get("active")?
		Appetite.activeFilter === true :
		Appetite.activeFilter === false ;
	},




	deleteRecipe: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		this.$el.toggleClass("active",this.model.get("active"));
		this.toggleActive();
		return this;
	}
	
});