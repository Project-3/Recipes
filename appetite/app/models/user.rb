class User < ActiveRecord::Base
	has_many :inventories
	has_many :recipes
	has_secure_password
	validates_presence_of :name, :email
	validates :email, format: { with:  /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/, message: "Please check the format of your email." }, uniqueness:  {message: "Email already in system, please sign in."}

	def to_json(options = {})
		super(options.merge(:only => [:id, :name]))
	end
end
