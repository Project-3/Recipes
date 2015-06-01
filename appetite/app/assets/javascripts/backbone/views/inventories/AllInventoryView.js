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

	events: {
		"click #add-inventory": "addInv",
		"click #search-butt": "searchInv"
	}, 

	searchInv: function () {
		var counter = 0;
		$('.checked-ingredient').each(function() {
            if ($(this).is('checked')) {
            	counter++
            	console.log(counter);
            };
        });

		if ($('input[name=ingredients]:checked').length > 0) {
			userRouter.navigate("search", {trigger: true});
		} else {
			alert("Please check all ingredients you would like to use in your dish. OR ignore this.")
		}
	},

	addInv: function(){
		var newIngFld = $('#ingredient').val();
		var newGrpFld = $('#group').val();
		var thisUserId = this.collection.models[0].attributes.user_id

		// add a new model to the collection 
		// since collection listens to sync, it will auto append to view on successful save
		this.collection.create({
			ingredient: newIngFld,
			group: newGrpFld,
			user_id: thisUserId
		});

		$('#ingredient').val("");
	},

	render: function() {
		var div = this.$el;
		var bod = $("body")
		div.html("");

		div.append(new Appetite.Views.CreateInventoryView().render().$el);

		// rendering ingredients to dom sorted by group		
		div.append("<h2>Protein</h2>");
		this.collection.byGroup("protein").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		div.append("<hr>");
		div.append("<h2>Produce</h2>");
		this.collection.byGroup("produce").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		div.append("<hr>");
		div.append("<h3>Dairy</h3>");
		this.collection.byGroup("dairy").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		div.append("<hr>");
		div.append("<h3>Grain</h3>");
		this.collection.byGroup("grain").each(function(inventory) {
		div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		div.append("<br><br>");

		div.append("<button id='search-butt'>Search</button>")
		return this;
	}
});




