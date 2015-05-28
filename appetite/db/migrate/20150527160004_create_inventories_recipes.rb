class CreateInventoriesRecipes < ActiveRecord::Migration
  def self.up
    create_table :inventories_recipes, id: false do |t|
    	t.integer :inventory_id, null: false
    	t.integer :recipe_id, null: false
    end
    add_foreign_key :inventories_recipes, :inventories
   add_foreign_key :recipes_inventories, :recipes
  end
end
