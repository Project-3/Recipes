class UsersController < ApplicationController
	protect_from_forgery with: :null_session
	before_action :authenticate, except: [:create]

	# user show page
	def show
		# only if user logged-in
		@user = User.find(session[:user_id])

		# sending either html or json to user show page
		respond_to do |format|
			format.html { render :show }
			# sends monstrous json with user and all associated inventories and recipes and their associations
			format.json { render json: @user.to_json(include: {inventories: { include: { recipes: {only: [:id]}}}, recipes: {include: {inventories: {only: [:id]}}}})}
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
			# is it possible to redirect to a backbone page - how to use site
			redirect_to user_path

		# if user failed validation
		else 
			flash.now[:error] = "Please check your inputs!"
			redirect_to new_session_path
		end
	end

end
