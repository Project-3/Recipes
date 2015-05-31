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
		var recipe = this.model
		

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
		// 			name: recipe.name,
		// 			api_id: recipe.id,
		// 			user_id: ,
		// 			instructions: recipe.instructions,
		// 			ingredients: recipe.ingredients
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