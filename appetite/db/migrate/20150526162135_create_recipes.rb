class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.text :name
      t.text :image
      t.integer :api_id
      t.integer :user_id
      t.text :instructions

      t.timestamps null: false
    end
  end
end
