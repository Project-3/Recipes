class CreateInventoriesRecipes < ActiveRecord::Migration
  def change
    create_table :inventories_recipes, id: false do |t|
    	t.integer :inventory
    	t.integer :recipe
    end
  end
end
