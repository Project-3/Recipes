class Recipe < ActiveRecord::Base
	has_and_belongs_to_many :inventories, dependent: :destroy, 
		join_table: :inventories_recipes

	belongs_to :user

	validates :active, inclusion: { in: [true, false] }
	default_scope {order(:name => :ASC)}
end
