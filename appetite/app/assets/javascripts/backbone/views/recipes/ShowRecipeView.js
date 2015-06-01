var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.ShowRecipeView = Backbone.View.extend({
	el: "div#content",
	initialize: function(){
		this.template = _.template($("#show-recipe").html());
		this.listenTo(this.model, "sync", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	 	this.render();
	},

	events: {
		"click .activate-butt" : "recipeUpdate",
		"click .used" : "inventoryUpdate",
		"click .delete-butt": "deleteRecipe" 
	},

	recipeUpdate: function() {
		this.model.toggle();
	},
	
	// updating availability of an inventory item if clicked
	inventoryUpdate: function(e){
		// grabs the id of the clicked button
		var inventory_id = e.currentTarget.id;
		// need to fetch from the collection since this is on a recipe model page
		var inventory_model = new Appetite.Collections.Inventories;

		inventory_model.fetch({
			success: function(model, response) {
				// filtering for inventory item
				var fetched_inventory = inventory_model.get(inventory_id);
				// calling the models function to update activeness
				fetched_inventory.toggle();
			}
		});	
	},

	deleteRecipe: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		return this;
	}
	
});