# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(user_name: "Mega Man", email: "mega@man.com", password: "123456", admin: true)
User.create(user_name: "Proto Man", email: "proto@man.com", password: "123456",  admin: false)

Community.create(name: "Cyberpunk 2077", description: "A community for the new Cyberpunk 2077 video game releasing on November 19, 2020 by CD Projekt Red.")
Community.create(name: "Dating", description: "A community for everyone in the dating world or who wants to be a part of it.")
Community.create(name: "Marvel Cinematic Universe", description: "Where Avengers assemble and discuss all the Marvel movies.")
Community.create(name: "Cooking", description: "From beginners to experts, enjoy a community dedicated to becoming the best chefs we can!")
Community.create(name: "Star Wars", description: "A respectful community for Star Wars fans to rejoice in the beauty of the story.")
