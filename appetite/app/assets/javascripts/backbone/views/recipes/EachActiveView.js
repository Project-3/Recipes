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
		"click .avail-butt": "toggleInventory",
		"click .dectivate-butt" : "recipeUpdate",
		"click .delete-butt": "deleteRecipe"
	},

	recipeUpdate: function(){
		this.model.toggle();	
	},

	deleteRecipe: function(){
		this.model.destroy();
	},

	toggleInventory: function(e) {
		// grabs the id of the clicked button
		var invent_id = e.currentTarget.id;
		console.log(invent_id);
		// need to fetch from the collection since this is on a recipe model page
		var inventory_model = new Appetite.Collections.Inventories;

		inventory_model.fetch({
			success: function(model, response) {
				// filtering for inventory item
				var fetched_inventory = inventory_model.get(invent_id);
				// calling the models function to update activeness
				fetched_inventory.toggle();
				// since this collection doesn't belong recipes, it can't listen to it to change automatically, so changing color manually	
				if (fetched_inventory.attributes.avail == true) {		
					$("button#"+invent_id).css("background-color", "green");		
				} else {		
					$("button#"+invent_id).css("background-color", "red");		
				}
			}
		});	
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model.toJSON()}));
		return this;
	}
});


