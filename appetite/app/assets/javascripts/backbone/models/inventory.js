var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};
Appetite.Models.Inventory = Backbone.Model.extend({
	urlRoot: "/user/inventories",
	// defaults: {
 //  		avail: true
 //  	},
  	// toggle the availability of an inventory item
	toggle: function() {
		console.log(this.get("avail"))
		// should use this.save here but not working...b/c of defaults?
		this.set({
		  	"avail": !this.get("avail")
		});


	}
});
