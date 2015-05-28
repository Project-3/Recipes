class CreateInventoriesRecipes < ActiveRecord::Migration
  def self.up
    create_table :inventories_recipes, id: false do |t|
    	t.integer :inventory_id, null: false
    	t.integer :recipe_id, null: false
    end
  end
end
