var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// called on by ActiveRecipeView for each active recipe
Appetite.Views.EachActiveView = Backbone.View.extend({
	tagName: "div",

	initialize: function(){
	 	this.template = _.template($("#active-recipe").html());
	 	this.listenTo(this.model, "sync", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	},

	events: {
		"click .activate-butt": "toggleInventory",
		"click .dectivate-butt" : "recipeUpdate",
		"click .delete-butt": "deleteRecipe"
	},

	// called on when deactive recipe button is clicked
	recipeUpdate: function(){
		this.model.toggle();	
	},

	// called on when delete button is clicked
	deleteRecipe: function(){
		this.model.destroy();
	},

	// called on when activate button is clicked
	toggleInventory: function(e) {
		// grabs the id of the clicked button
		var invent_id = e.currentTarget.id;

		// need to fetch from the collection since this is on a recipe model page
		var inventory_model = new Appetite.Collections.Inventories;

		inventory_model.fetch({
			success: function(model, response) {
				// filtering for inventory item
				var fetched_inventory = inventory_model.get(invent_id);
				// calling the models function to update activeness
				fetched_inventory.toggle();
			}
		});	
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		return this;
	}
});


