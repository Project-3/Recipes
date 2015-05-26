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
