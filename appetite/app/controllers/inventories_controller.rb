class InventoriesController < ApplicationController
	protect_from_forgery with: :null_session


# gets all of the users ingredients and any user recipes associated with that ingredient
def index
	@user = User.find(session[:user_id])
	@inventories =  @user.inventories
	if @inventories
		render json: @inventories.to_json(:include => [:recipes])
	else
		flash[:error] = "Start out by adding what food you have on hand to your inventory (:^J)"
		render status: 400, nothing: true
	end
end

#gets the saved recipes associated with any one ingredient
def show
	@inventory =  Inventory.find(params[:id])
	if @inventories
		render json: @inventory.to_json(:include => [:recipes])
	end
end

# create new ingredient, save it, let backbone rerender its view

### added default value to the avail column so when you enter an ingredient it will be 'true'
def create
	@inventory = Inventory.new(inventory_params)
	if @inventory.save
		render json: @inventory
	end
end

def update
	@inventory = Inventory.find(params[:id])
	if @inventory.update(inventory_params)
		render json: @inventory
	else
		render status: 400, nothing: true
	end
end


def destroy
	@inventory = Inventory.find(params[:id])
	if @inventory.destroy
		render json: {}
	else
		render status: 400, nothing: true
	end
end

private
def inventory_params
	params.require(:inventory).permit(:ingredient, :group, :user_id)
end
end
