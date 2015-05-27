Appetite.Views.UsersIndex = Backbone.View.extend({


  template: JST['users/index']

});


// do logic for --if response["recipe"][0]
activeRecipeView = Backbone.View.extend({
	el:"#content", 
	template: _.template($("#active-recipe").html()),
	events:{
		"click .deactivate": "deactivateRecipe",
		"click .update": "updateIngredients"
	},

	deactivate: function(){
		$(".deactivate").attr('id')
	}
})