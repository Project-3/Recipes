class UsersController < ApplicationController
	protect_from_forgery with: :null_session
	before_action :authenticate, except: [:create]

	# user show page
	def show
		# only if user logged-in
		@user = User.find(session[:user_id])
		# @protein = @user.inventories.where({:group => "protein"})
		# @produce = @user.inventories.where({:group => "produce"})
		# @dairy= @user.inventories.where({:group => "dairy"})
		# @grain= @user.inventories.where({:group => "grain"})

		# sending either html or json to user show page
		respond_to do |format|
			format.html { render :show }
			format.json { render json: @user.to_json(:include => [:inventories, :recipes]) }
		end
	end

	# creating a new user
	def create
		@user = User.new(name: params[:name], email: params[:email], password: params[:password])
		# if new user passes validation
		if @user.save
			session[:user_id] =  @user.id
			session[:name] = @user.name
			flash[:success] = "Welcome #{@user.name}! Start off by filling out your inventory."
			redirect_to user_path

		# if user failed validation
		else 
			flash[:error] = "Please check your inputs!"
			redirect_to new_session_path
		end
	end

end
