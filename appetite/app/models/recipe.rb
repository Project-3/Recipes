class Recipe < ActiveRecord::Base
	has_and_belongs_to_many :inventories, dependent: :destroy, 
		join_table: :inventories_recipes

	belongs_to :user

	validates :name, :api_id, :user_id, :ingredients, :instructions, presence: true

	validates :active, inclusion: { in: [true, false] }
	
	default_scope {order(:name => :ASC)}
end
