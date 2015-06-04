var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// View for all of user's Inventory items
Appetite.Views.AllInventoryView = Backbone.View.extend({
	el: "div#content",
	initialize: function() { 
		this.listenTo(this.collection, "sync remove", this.render);
	},

	events: {
		"click #add-inventory": "addInv",
		"click #search-butt": "searchInv"
	}, 

	// if search button is clicked, this function is triggered
	searchInv: function () {
		var counter = 0;
		// making sure at least one ingredient was checked when search button was hit
		$('.checked-ingredient').each(function() {
			// if none checked and search button was clicked, send alert
            if ($(this).is(':checked') == false && $('.checked-ingredient').length == counter) {
            	alert("Please check all ingredients you would like to use in your dish.")
            	// if at least one was hit, trigger router to search
            } else if ($(this).is(':checked')) {
            	userRouter.navigate("search", {trigger: true});
            };
            counter++
        });
	},

	// if add inventory button is clicked, this function is triggered
	addInv: function(){
		// grabbing all the values entered for the new ingredient
		var newIngFld = $('#ingredient').val();
		var newGrpFld = $('#group').val();

		// add a new model to the collection 
		// since collection listens to sync, it will auto append to view on successful save
		this.collection.create({
			ingredient: newIngFld,
			group: newGrpFld,
			user_id: thisUserId
		});

		// clears the ingredient name field
		$('#ingredient').val("");
	},

	render: function() {
		var div = this.$el;
		// clears the div content
		div.html("");

		// first append the add ingredient form
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
		div.append("<h2>Dairy</h2>");
		this.collection.byGroup("dairy").each(function(inventory) {
			div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		div.append("<hr>");
		div.append("<h2>Grain</h2>");
		this.collection.byGroup("grain").each(function(inventory) {
		div.append(new Appetite.Views.InventoryView({model: inventory}).render().$el);
		});

		// adding some breaks at the end
		div.append("<br><br>");

		// appending search button; done here for styling convenience
		div.append("<button id='search-butt'>Search</button>")
		return this;
	}
});


