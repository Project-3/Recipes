class SessionsController < ApplicationController
	protect_from_forgery with: :null_session
	before_action :authenticate, only: [:destroy]

	# new session login
	def new
		if session[:user_id] 
			redirect_to user_path
		end
	end

	# starts a new session
	def create
		user = User.find_by({email: params[:email]})
		if user && user.authenticate(params[:password])
			session[:user_id] = user.id
			session[:name] = user.name
			redirect_to user_path 
		else 
			@email = params[:email]
			flash.now[:error] = "Unknown email/password"
			render :new
		end
	end

	# destroy session on logout
	def destroy
		reset_session 
		redirect_to new_session_path
	end

end
