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

puts 'users'

user1 = User.create(username: 'splashing360fornow')
user2 = User.create(username: 'Rocky Road')
user3 = User.create(username: 'RamblinCoconut')

puts 'songs'

song1 = Song.create(name: 'Funny Saloon', topic: 'funny', lyrics: '', music: '')
song2 = Song.create(name: 'Grand Muir Tree', topic: 'nature', lyrics: '', music: '' )
song3 = Song.create(name: 'Love Boat', topic: 'romance', lyrics: '', music: '')    

puts 'songy libs'

songylib1 = Songylib.create(name: 'Fill in the Blank Saloon', user_input: '', song_id: song1.id, user_id: user1.id)
songylib2 = Songylib.create(name: 'Fill up the Grand Muir Tree', user_input: '', song_id: song2.id, user_id: user1.id)
songylib3 = Songylib.create(name: 'Fill up the my Blank Love Boat', user_input: '', song_id: song3.id, user_id: user1.id)





##puts 'saved songs'