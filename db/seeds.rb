# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "started seeding..."

Agency.destroy_all
User.destroy_all
Seller.destroy_all
Agent.destroy_all
Contract.destroy_all

agency = Agency.create(company_name: "Real State Agency", address: "5678 Main rd, New York, New York")


User.create!(name: "michel", email: "michelemail@gmail.com", password: "r123456", agency_id: agency.id)
User.create!(name: "Ismael", email: "Ismaelemail@gmail.com", password: "r678906", agency_id: agency.id)

s1 = Seller.create(name: "sam", address: "1234 park st, new york", phone_number: "630 800 5050")
s2 = Seller.create(name: "luis", address: "3546 park st, texas", phone_number: "630 705 0780")
s3 = Seller.create(name: "andrew", address: "6768 mountain st, utah", phone_number: "630 608 6789")
s4 = Seller.create(name: "Isac", address: "1008 river st, chicago", phone_number: "630 405 5437")
s5 = Seller.create(name: "Alex", address: "1010 Grand st, chicago", phone_number: "630 340 0965")


a1 = Agent.create(name:"britney", company: "realstate pro", license_number: "9071230")
a2 = Agent.create(name:"hanna", company: "realstate profecionals", license_number: "8998235")


Contract.create(seller_id: s1.id, agent_id: a1.id, price: 89000)
Contract.create(seller_id: s2.id, agent_id: a1.id, price: 108000)
Contract.create(seller_id: s3.id, agent_id: a1.id, price: 189000)
Contract.create(seller_id: s4.id, agent_id: a2.id, price: 129000)
Contract.create(seller_id: s5.id, agent_id: a2.id, price: 129000)


puts "done seeding"