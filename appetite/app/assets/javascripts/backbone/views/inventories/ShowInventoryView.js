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
	 	this.listenTo($(".active-butt"), "click", this.render);
	},

	events: {
		"click .delete-butt" : "deleteItem",
		"click #avail-butt" : "switchItem",
		"click .active-butt" : "switchActive"
	},

	switchActive: function(e) {

		// this grabs the id of the clicked button
	    var recipe_id = e.currentTarget.id;
	    // since recipe belongs to a different collection, need to do a fetch 
	    var recipe_model = new Appetite.Collections.Recipes;

	    recipe_model.fetch({
	     	success: function(model, response) {
	     		// finding the recipe by its id obtained from clicked button
	     		var recipe_fetched = recipe_model.get(recipe_id);
	     		// using the function in recipe model to change it's activeness
	     		recipe_fetched.toggle();

	     		// since this collection doesn't belong inventories, it can't listen to it to change automatically, so changing color manually
	     		if (recipe_fetched.attributes.active == true) {
	     			$("button#"+recipe_id).css("background-color", "green");
	     		} else {
	     			$("button#"+recipe_id).css("background-color", "red");
	     		}
	     	}
	    });
	},

	// toggles availability of inventory item
	switchItem: function() {
		this.model.toggle();
	},

	deleteItem: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.html(this.template({inventory: this.model.toJSON()}));
		return this;
	}
	
});