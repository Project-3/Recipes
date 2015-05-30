var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

Appetite.Models.Recipe = Backbone.Model.extend({
	urlRoot: "/user/recipes",
	defaults: {
  		image: "http://en.academic.ru/pictures/enwiki/78/No_image_available.svg"
  	},
  	// toggles the active value of a recipe
	toggle: function() {
		this.save({
		  	"active": !this.get("active")
		});
	}
});
