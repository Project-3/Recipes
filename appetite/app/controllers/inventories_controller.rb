class InventoriesController < ApplicationController
	protect_from_forgery with: :null_session

	# searching for recipes
	def search
		# http header for api call
		options = {
			:headers => {
				"ACCEPT" => "application/json",
				"CONTENT-TYPE" => "application/json",
				"x-api-key" => "78861666c8ba" 
			}
		}

		# getting the search query
		checked = params[:ingredients].join("+").gsub(" ", "+")
		puts checked
		# making the call
		response = HTTParty.get("http://www.weeatt.com/api/v1/recipes?qs=#{checked}&auth_token="+Rails.application.secrets.secret_password, options)
		
		if response
			render json: response
		else
			render status: 400, nothing: true
		end
	end

	# gets all of the users ingredients and any user recipes associated with that ingredient
	def index
		@user = User.find(session[:user_id])
		@inventories =  @user.inventories
		if @inventories
			render json: @inventories
		else
			render status: 400, nothing: true
		end
	end

	#gets the saved recipes associated with any one ingredient
	def show
		@inventory =  Inventory.find(params[:id])
		if @inventory
			render json: @inventory.to_json(:include => [:recipes])
		else
			render status: 400, nothing: true
		end
	end

	# create new ingredient, save it, let backbone rerender its view
	def create
		if Inventory.find_by({ingredient: params[:ingredient]}) 
			flash.now[:error] = "That item is already in your inventory."
			render status: 400, nothing: true
		else
			@inventory = Inventory.new(inventory_params)
			if @inventory.save
				render json: @inventory
			else
				render status: 400, nothing: true
			end
		end
	end

	# updates an ingredient; backbone's put route
	def update
		@inventory = Inventory.find(params[:id])
		if @inventory.update(inventory_params)
			render json: @inventory
		else
			render status: 400, nothing: true
		end
	end

	# deletes inventory and all associatons
	def destroy
		@inventory = Inventory.find(params[:id])
		if @inventory.destroy
			render json: {}
		else
			render status: 400, nothing: true
		end
	end

	# private params for form when saving and updating
	private
	def inventory_params
		params.require(:inventory).permit(:ingredient, :group, :avail, :user_id, )
	end
end