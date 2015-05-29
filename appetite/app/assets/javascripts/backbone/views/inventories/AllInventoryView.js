var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.AllInventoryView = Backbone.View.extend({
	el: "div#content",
	initialize: function() { 
		this.listenTo(this.collection, "sync remove", this.render);
		this.template = _.template($("#showInventory").html());
	},

	render: function() {
		var div = this.$el;
		div.html("");

		// this.collection.produce().forEach(function(produceInstance) {

		// 	console.log(produceInstance.attributes)	
     
		// 	div.append('<br>' + '<a href="#inventory/'+produceInstance.attributes.id +'">' +'<h3>' + produceInstance.attributes.ingredient  + '</h3>' + '</a>')
		// })
		var produce = this.collection.produce();
		console.log(produce)
		div.html(this.template({inventory: produce[1]}).render().$el);

		// div.append(new Appetite.Views.InventoryView({inventory: collection.toJSON()}).render().$el);

		// this.collection.each(function(inventory) {
		// 	div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		// });
		return this;
	}
});