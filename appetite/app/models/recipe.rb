class Recipe < ActiveRecord::Base

	has_and_belongs_to_many :inventories, dependent: :destroy, 
		class_name: "Recipe",
		foreign_key: "recipe_id",
		join_table: "inventories_recipes",
		association_foreign_key: "inventory_id"

	belongs_to :user

	default_scope {order(:active => :DESC)}
end
