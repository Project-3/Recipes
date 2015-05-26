class SessionsController < ApplicationController
	protect_from_forgery with: :null_session
	before_action :authenticate, only: [:destroy]

	def new
	end

	def create
		user = User.find_by({email: params[:email]})
		puts "DO I GET HERE?"
		puts user
		puts params[:email]
		if user && user.authenticate(params[:password])
			session[:user_id] = user.id
			session[:name] = user.name
			redirect_to user_path 
		else 
			@email = params[:email]
			flash[:error] = "Unknown email/password"
			render :new
		end
	end

	def destroy
		reset_session 
		redirect_to new_session_path
	end

end
