# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name:'Nat', email:'itsnatscott@gmail.com', password: 'nat' )
User.create(name:'Abner', email:'abtyang@gmail.com', password: 'abs' )
Inventory.create(ingredient: 'Chicken Breast', group:'protein', avail: true, user_id:1)
Inventory.create(ingredient: 'Eggplant', group:'produce', avail: true, user_id:2)

Inventory.create(ingredient: 'Parmesean Cheese', group:'dairy', avail: false, user_id:1)
Inventory.create(ingredient: 'Rice', group:'grain', avail: false, user_id:2)

options = {
:headers => {
  "ACCEPT" => "application/json",
  "CONTENT-TYPE" => "application/json",
  "x-api-key" => "78861666c8ba" 
    }
}
response = HTTParty.get("http://www.weeatt.com/api/v1/recipes?qs=okra&auth_token=leh0XQY71OGO0iFY_6aJ", options)
response["results"].each do |result|
    if result["image"] != nil 
        image = result["image"]["large_image_path"]
    else image = "no image available"
    Recipe.create(name: result["name"], image: image, api_id: result["id"] , instructions: result["instructions"], active: false, ingredients: result["ingredients"], user_id: 1)
    end


end

response = HTTParty.get("http://www.weeatt.com/api/v1/recipes?qs=chicken&auth_token=leh0XQY71OGO0iFY_6aJ", options)

response["results"].each do |result|
    if result["image"] != nil 
        image = result["image"]["large_image_path"]
    else image = "no image available"

    Recipe.create(name: result["name"], image: image, api_id: result["id"] , instructions: result["instructions"], active: false, ingredients: result["ingredients"], user_id: 2)
    end
end