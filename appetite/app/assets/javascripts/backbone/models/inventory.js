var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Models.Inventory = Backbone.Model.extend({
	urlRoot: "/user/inventories",
	defaults: {
  		avail: true
  	},
  	// toggles the availability of an inventory item
	toggle: function() {
		this.save({
		  	"avail": !this.get("avail")
		});
	}
});
