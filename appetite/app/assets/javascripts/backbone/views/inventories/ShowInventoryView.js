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
	},

	events: {
		"click .delete-butt" : "deleteItem",
		"click #search-butt" : "searchInvent",
		"click #avail-butt" : "switchItem"
	},

	switchItem: function() {
		// console.log(this.model.attributes["avail"])
		// if (this.model.attributes.avail === true) {
		// 	console.log("here2")
		// 	this.model.attributes["avail"] = false;
		// } else {
		// 	console.log("here3")
		// 	this.model.attributes["avail"] = true;
		// }
		this.model.toggle();
		this.model.save();
	},
	
	searchInvent: function(){
		// this.model.ingredient also pass in id
		// put ajax call here
	},

	deleteItem: function(){
		this.model.destroy();
	},

	render: function(){
		this.$el.html(this.template({inventory: this.model.toJSON()}));
		return this;
	}
	
});