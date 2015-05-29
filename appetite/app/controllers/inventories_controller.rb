class InventoriesController < ApplicationController
	protect_from_forgery with: :null_session


	# gets all of the users ingredients and any user recipes associated with that ingredient
	def index
		@user = User.find(session[:user_id])
		@inventories =  @user.inventories
		if @inventories
			render json: @inventories
			# .to_json(:include => [:recipes])
		else
			render status: 400, nothing: true
		end
	end

	#gets the saved recipes associated with any one ingredient
	def show
		@inventory =  params[:inventory.id]
		binding.pry
		if @inventories
			render json: @inventory.to_json(:include => [:recipes])
		end
	end

	def create
	end

	def update
	end

	def destroy
	end
end
