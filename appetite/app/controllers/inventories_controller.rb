class InventoriesController < ApplicationController
	protect_from_forgery with: :null_session

	def index
	@user = User.find(session[:user_id])
	@inventories =  Inventory.where(user_id: session[:user_id]).joins(:recipes)
	# respond_to do |format|
	# 		format.html { render :index }
	# 		format.json { render json: @inventory.to_json}
	if @inventories
	render json: @inventories.to_json(:include => [:inventory_recipe])
		end
	end



	def show
	end


	def create
	end

	def update
	end

	def destroy
	end

end
