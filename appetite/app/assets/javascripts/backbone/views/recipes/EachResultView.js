var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Views.EachResultView = Backbone.View.extend({
	tagName: "div",

	initialize: function(){
	 	this.template = _.template($("#recipe-result").html());
	 	this.listenTo(this.model, "sync", this.render);
	},

	events: {
		"click .save-button" : "saveRecipe",
	},
	

	saveRecipe: function(){
		// get values and save 

	// get the user id
	var user_id = "";	
	$.ajax({
    url: '/user',
    type: "GET",
    dataType: "json",
    success: function (data) {
    	// user_id = JSON.parse(data.id)
        //console.log(user_id);

    }
	});
	console.log(user_id)

		var recipe = this.model
		console.log(recipe)
		
		var name = recipe.name
		var api_id = recipe.id
		var instructions = recipe.instructions
		var ingredients = recipe.ingredients



		// $.ajax({
		// 	$("#recipe.id").on("click", function(){
		// 		type: "POST",
		// 		url: "user/recipies/create",
		// 		dataType: "json",
		// 		data: {
		// 			name: name,
		// 			api_id: api_id,
		// 			user_id: user_id,
		// 			instructions: instructions,
		// 			ingredients: ingredients
		// 		}
		// 	});
		// });
		// var nameVal = this.$(".recipe-name");
		// var apiIdVal = this.$("")
		// this.model.save({
		// 	name:

		// }); 	
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model}));
		return this;
	}
});