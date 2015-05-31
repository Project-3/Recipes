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
	

	saveRecipe: function(e){
		var saveRecipeId = e.currentTarget.id;

		<h2 class="recipe-name">{{= recipe.name }}</h2>
		<p class="recipe-ingredients">{{= recipe.ingredients.nl2br() }}</p>
		<button class="save-button" id="{{= recipe.id }}">Save</button>

				"name"
    t.integer  "api_id"
    t.integer  "user_id"
    t.text     "instructions"
    t.boolean  "active"
    t.text     "ingredients"
		// get values and save 
		var name = recipe.name
		var api_id = recipe.id
		var instructions = recipe.instructions
		var ingredients = recipe.ingredients

		var recipe_model = new Appetite.Collections.Recipes;

	    recipe_model.create({
	     	
	    });	
	},

	render: function(){
		this.$el.html(this.template({recipe: this.model}));
		return this;
	}
});




