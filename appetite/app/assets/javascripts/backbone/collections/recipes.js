var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Collections.Recipes = Backbone.Collection.extend({
  model: Appetite.Models.Recipe,
  url: "/user/recipes"
});

// var recipeCollection = new Appetite.Collections.Recipes;
// recipeCollection.fetch();