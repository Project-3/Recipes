class Inventory < ActiveRecord::Base
	validates :ingredient, uniqueness: { message:  "Ingredient is already in your list" }
	validates :ingredient, presence: true

	validates :group, presence: true

	validates :avail, inclusion: { in: [true, false] }

	validates :user_id, presence: true
end
