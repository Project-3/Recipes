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
	},

	render: function() {
		var div = this.$el;
		div.html("");

		// this.collection.produce().forEach(function(produceInstance) {

		// 	console.log(produceInstance.attributes)	
     
		// 	div.append('<br>' + '<a href="#inventory/'+produceInstance.attributes.id +'">' +'<h3>' + produceInstance.attributes.ingredient  + '</h3>' + '</a>')
		// })
		
		   // this.collection.each(function(inventory){
		   //    html.push(template(inventory.toJSON()));
		   //  });

		// console.log(collection)
		// console.log(this.collection)
		// console.log(this.collection.toJSON())
		// console.log(produce)
		// console.log(produce.toJSON())
		// div.html(this.template({inventory: produce}).render().$el);

		// div.append(new Appetite.Views.InventoryView({inventory: collection.toJSON()}).render().$el);
		div.append("<h2>Protein</h2>")
		this.collection.byGroup("protein").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});
		div.append("<hr>")
		div.append("<h2>Produce</h2>")
		this.collection.byGroup("produce").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});
		div.append("<hr>")
		div.append("<h3>Dairy</h3>")
		this.collection.byGroup("dairy").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});
		div.append("<hr>")
		div.append("<h3>Grain</h3>")
		this.collection.byGroup("grain").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});
		return this;
	}
});







