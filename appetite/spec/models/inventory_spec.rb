require 'rails_helper'

# Rspec test for Rails Inventory model
describe Inventory do 
	# decided to test this on the server since same ingredient can exist for different users
	# it "ingredient should be unique" do 
	# 	ingredient = Inventory.create(ingredient: "carrot", group: "produce", avail: true, user_id: 1)
	# 	expect(Inventory.count).to eq 1
	# 	ingredient2 = Inventory.new(ingredient: "carrot", group: "produce", avail: true, user_id: 1)
	# 	expect(ingredient2).to be_invalid
	# 	expect(ingredient2.errors[:ingredient]).to eq ["Ingredient is already in your list"]
	# end

	it "should be invalid with an empty ingredient" do 
		ingredient6 = Inventory.create(ingredient: "", group: "produce", avail: false, user_id: 1)
		expect(ingredient6).to be_invalid
		expect(ingredient6.errors[:ingredient]).to eq ["can't be blank"]
	end

	it "should have a group" do 
		ingredient3 = Inventory.create(ingredient: "apples", group: " ", avail: false, user_id: 1)
		expect(ingredient3).to be_invalid
		expect(ingredient3.errors[:group]).to eq ["can't be blank"]

	end

	it "avail should be true or false" do 
		ingredient7 = Inventory.new(ingredient: "onions", group: "produce", avail: "some string", user_id: 1)
		expect(ingredient7[:avail]).to eq false
	end

	it "should have a user_id" do 
		ingredient8 = Inventory.new(ingredient: "onions", group: "produce", avail: "some string", user_id: nil)
		expect(ingredient8).to be_invalid
	end
end


