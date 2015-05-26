class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.text :ingredient
      t.text :group
      t.boolean :avail
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
