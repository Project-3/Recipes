require 'rails_helper'

# Rspec test for Rails User model
describe User do 
	it "should have a provided email address" do
		user1 = User.create(email: " ", password:"sticks")
		expect(user1).to be_invalid
		expect(user1.errors[:email]).to eq ["can't be blank", "Please check the format of your email."]
	end

	it "should have a unique email address" do
		user = User.create(name: "thing1", email: "bns@yahoo.com",  password:"sticks2001")
		user2 = User.create(name: "thing2", email: "bns@yahoo.com", password:"sticks")
		expect(user2).to be_invalid
		expect(user2.errors[:email]).to eq ["Email already in system, please sign in."]

	end

	it "should have a valid email address" do 
		user = User.create(email: "bnsyahoo$om", password:"sticks")
		expect(user).to be_invalid
		expect(user.errors[:email]).to eq ["Please check the format of your email."]
	end

	it "should have a provided name" do
		user = User.create(name:"", email:"bys@yahoo.com", password:"sticks")
		expect(user).to be_invalid
	end
end


