var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// If user clicks on a recipe from AllRecipeView or ActiveRecipeView, this view shows recipe
Appetite.Views.ShowRecipeView = Backbone.View.extend({
	el: "div#content",
	initialize: function(){
		this.template = _.template($("#show-recipe").html());
		this.listenTo(this.model, "sync", this.render);
	 	this.listenTo(this.model, "destroy", this.remove);
	},

	events: {
		"click .activate-butt" : "recipeUpdate",
		"click button.used" : "inventoryUpdate",
		"click .delete-butt": "deleteRecipe" 
	},

	// toggles activeness of recipe
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
				// // since this collection doesn't belong recipes, it can't listen to it to change automatically, so changing color manually	
				// if (fetched_inventory.attributes.avail == true) {		
				// 	$("button#"+inventory_id).css("background-color", "green");		
				// } else {		
				// 	$("button#"+inventory_id).css("background-color", "red");		
				// }
			}
		});	
	},

	deleteRecipe: function(){
		this.model.destroy();
	},

	render: function(){
		console.log("hello");
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		return this;
	}
	
});