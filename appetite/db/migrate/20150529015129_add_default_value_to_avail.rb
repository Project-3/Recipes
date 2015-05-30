class AddDefaultValueToAvail < ActiveRecord::Migration
	# add default true value to new inventory
	def up
		change_column :inventories, :avail, :boolean, :default => true
	end

	def down
		change_column :inventories, :avail, :boolean, :default => true
	end
end
