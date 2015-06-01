var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Collections.Recipes = Backbone.Collection.extend({
  model: Appetite.Models.Recipe,
  url: "/user/recipes",
  
  // function to filter for only active recipes 
  active: function(value) {
    filtered = this.filter(function(collect) {
      return collect.get("active") === value;
    });
    return new Appetite.Collections.Recipes(filtered);
  }
});


