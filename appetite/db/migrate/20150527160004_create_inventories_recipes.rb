class CreateInventoriesRecipes < ActiveRecord::Migration
  def change
    create_table :inventories_recipes, id: false do |t|
    	t.belongs_to :inventory, index: true
    	t.belongs_to :recipe, index: true
    end
  end
end
