// Appetite.Views.UsersIndex = Backbone.View.extend({


//   template: JST['users/index']

// });

// do logic for --if response["recipe"][0]
// var Appetite = Appetite || {
// 	Models: {},
// 	Collections: {},
// 	Views: {},
// 	Routers: {}
// };

// Appetite.Views.ActiveRecipe = Backbone.View.extend({
// 	el:"#content", 
// 	initialize: function(){
// 		this.listenTo(this.collection, "sync", this.render);
// 		this.template = _.template($("#active-recipe").html());
// 	},
// 	events:{
// 		"click .deactivate": "deactivateRecipe",
// 		"click .update": "updateIngredients"
// 	},

// 	deactivateRecipe: function(e) {
// 		e.preventDefault();
// 		var recipeId = $(".deactivate").attr('id');
// 		// Make button change color on click 
// 		// Need something similar to this.collection.save()

// 		$.ajax({
// 			type: "PUT",
// 			url: window.location + "user/recipe/" + recipeId,
// 			data: { recipe_id: recipeId }, 
// 			success: function(data) {
// 				// error: function(){
// 				// 	alert("error");
// 				// }
// 			}
// 		});

// 	},

// 	updateIngredients: function(e) {
// 		e.preventDefault();


// 	},

// 	render: function() {
// 		var div = this.$el;
// 		div.html("");
// 		this.collection.each(function(user){
// 			div.append(this.template({user: user.toJSON()}).$el)
// 		});
// 		return this
// 	}

// });

// var allRecipesView = Backbone.View.extend({


// });

// var showRecipeView = Backbone.View.extend({

// });

// var allInventoryView = Backbone.View.extend({

// });

// var showInventoryView = Backbone.View.extend({

// });

// var searchRecipesView = Backbone.View.extend({

// });









