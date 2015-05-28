class CreateInventoriesRecipes < ActiveRecord::Migration
  def change
    create_table :inventories_recipes, id: false do |t|
    	t.integer :inventory
    	t.integer :recipe
    end
    add_foreign_key :inventories_recipes, :inventories
   add_foreign_key :recipes_inventories, :recipes
  end
end
