# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all
User.destroy_all
SavedSong.destroy_all
Songylib.destroy_all

puts 'songs'

song1 = Song.create(name: 'Funny Saloon', topic: 'funny', lyrics: '', music: '')
song2 = Song.create(name: '', topic: '', lyrics: '', music: '' )
song3 = Song.create(name: 'Funny Saloon', topic: 'funny', lyrics: '', music: '')    )

puts 'users'

user1 = User.create()
user2 = User.create()
user3 = User.create()

puts 'songy libs'

songylib1 = Songylib.create()
songyLib2 = Songylib.create()
songyLib3 = Songylib.create()

puts 'saved songs'