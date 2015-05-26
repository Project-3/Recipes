class UsersController < ApplicationController
	protect_from_forgery with: :null_session

	def show
		@user = User.find(session[:user_id])
		@protein = @user.inventories.where({:group => "protein"})
		@produce = @user.inventories.where({:group => "produce"})
		@dairy= @user.inventories.where({:group => "dairy"})
		@grain= @user.inventories.where({:group => "grain"})
	end

	def create
	end
end
