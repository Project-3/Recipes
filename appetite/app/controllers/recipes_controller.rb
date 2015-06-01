class RecipesController < ApplicationController
	protect_from_forgery with: :null_session

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
	def create
		if Recipe.find_by({api_id: params[:api_id]})
			flash[:error] = "Recipe '#{params[:name]}' already exists in your saved recipes."
		else
			@recipe = Recipe.new(recipe_params)
			if @recipe.save
				ids = params[:inventories].split(",")
				for index in 0...ids.length
					@recipe.inventories << Inventory.where({id: ids[index].to_i})
				end

				render json: @recipe
			else
				render status: 400, nothing: true
			end
		end
	end

	# updating a recipe 
	def update
		@recipe = Recipe.find(params[:id])
		if @recipe.update(recipe_params)
			render json: @recipe
		else
			render status: 400, nothing: true
		end
	end

	# deleting an unwanted recipe
	def destroy
		@recipe = Recipe.find(params[:id])
		if @recipe.destroy
			render json: {}
		else
			render status: 400, nothing: true
		end
	end

	# private recipe params
	private
	def recipe_params
		params.require(:recipe).permit(:name, :api_id, :instructions, :user_id, :active, :ingredients)
	end

end






