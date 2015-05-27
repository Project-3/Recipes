class AddActiveToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :active, :boolean
  end
end
