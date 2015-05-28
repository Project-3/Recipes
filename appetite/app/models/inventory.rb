class Inventory < ActiveRecord::Base
	has_and_belongs_to_many :recipes, dependent: :destroy,
		join_table: :inventories_recipes

	belongs_to :user
	validates :ingredient, uniqueness: { message:  "Ingredient is already in your list" }
	validates :ingredient, presence: true

	validates :group, presence: true

	validates :avail, inclusion: { in: [true, false] }

	validates :user_id, presence: true
end
