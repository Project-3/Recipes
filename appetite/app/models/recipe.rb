class Recipe < ActiveRecord::Base
	has_and_belongs_to_many :inventories, dependent: :destroy, 
		join_table: :inventories_recipes

	belongs_to :user

	default_scope {order(:active => :DESC)}
end
