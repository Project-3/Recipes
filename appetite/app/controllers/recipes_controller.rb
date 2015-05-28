class RecipesController < ApplicationController
	protect_from_forgery with: :null_session

<<<<<<< HEAD

	def index
	end

	def show
	end


=======
	# all recipes corresponding to one user
	def index
		@recipes = Recipe.where(user_id: session[:user_id])
		if @recipes
			render json: @recipes.to_json(:include => [:inventories])
		else
			flash[:error] = "You haven't saved any recipes yet! Search now :)"
			render status: 400, nothing: true
		end
	end

	# showing as saved recipe with corresponding inventory
	def show
		@recipe = Recipe.find(params[:id])
		if @recipe 
			render json: @recipe.to_json(:include => [:inventories])
		else
			render status: 400, nothing: true
		end
	end

	# saving a recipe to the db
>>>>>>> d17d99d575b6361b64dac827ddf314dbecd67584
	def create
		# how are we connecting this with inventory?
		@recipe = Recipe.new(recipe_params)
		if @recipe.save
			render json: @recipe
		else
			render status: 400, nothing: true
		end
	end

<<<<<<< HEAD
	def update
	end

=======
	# deleting an unwanted recipe
>>>>>>> d17d99d575b6361b64dac827ddf314dbecd67584
	def destroy
		@recipe = Recipe.find(params[:id])
		if @recipe.destroy
			render json: {}
		else
			render status: 400, nothing: true
		end
	end

	private
	def recipe_params
		params.require(:recipe).permit(:name, :image, :api_id, :instructions, :user_id, :active, :ingredients)
	end

end









