Appetite.Collections.Recipes = Backbone.Collection.extend({
  model: Appetite.Models.Recipes,
  url: "/user/recipes"
});
var recipeCollection = Appetite.Collections.Recipes;
recipeCollection.fetch();