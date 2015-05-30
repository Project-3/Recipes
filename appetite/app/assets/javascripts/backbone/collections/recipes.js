var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Collections.Recipes = Backbone.Collection.extend({
  model: Appetite.Models.Recipe,
  url: "/user/recipes",

  // filter for only active recipes
  // active: function() {
  // 	return this.where({active: true});
  // },

   // filter for only active recipes 
  active: function(value) {
    filtered = this.filter(function(collect) {
      return collect.get("active") === value;
    });
    return new Appetite.Collections.Inventories(filtered);
  }

  // toggle the active value of a recipe
  // toggle: function() {
  // 	this.save({
  // 		active: !this.get("active")
  // 	});
  // }
});


