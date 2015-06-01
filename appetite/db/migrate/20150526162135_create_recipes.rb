class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.text :name
      t.string :image
      t.integer :api_id
      t.integer :user_id
      t.text :instructions
      t.boolean :active 
      t.text :ingredients

      t.timestamps null: false
    end
  end
end
