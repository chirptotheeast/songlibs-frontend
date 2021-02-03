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

song1 = Song.create(name: 'Bzz Bzz Bzz', topic: 'nature', lyrics: ' 
bzz, bzzz, bzzz,
bzzz, bzz, bzz
the ___ go
bzz, bzz  bzz
 
bzz, bzzz, bzzz,
bzzz, bzz, bzz
your ___ go
bzz bzz bzz,
 
The ___ are buzzing
So happy in the ___ .
Jumping from flower to flower
Their buzzing from the trees

The happy ___ are buzzing on my knees	

The happy ___ are buzzing in the trees	   
    
 	       
The hive is a buzzin with lots of a happy ___ , 
The queen she sings out, let’s pollinate these things!

The flowers, the trees, The flowers, the trees, 
pollinate them pretty please
The flowers, the trees, The flowers, the trees, 
pollinate them pretty please

The ___ are buzzing on my knees	

The ___ are buzzing in the trees	   


bzz, bzzz, bzzz,
bzzz, bzz, bzz
the ___ go
bzz, bzz  bzz
 
bzz, bzzz, bzzz,
bzzz, bzz, bzz
your ___ go
bzz bzz bzz', music: '' )

song2 = Song.create(name: "I Got a Star", topic: 'silly', lyrics:' 
I got a star in my ___ ,
star in my ___ , got a star in my ___ , oh yah,
I got a star in my pocket,
Come on lets rock it, got a star in my pocket, oh ya, 
 
___ , up in the air
 And we’ll fly fly fly, 
 
I got a star in my ___ ,
star in my pocket ,Got a star in my pocket oh yah,
I got a star in my ___ , show me how you rock it,
Got a star in my pocket, oh yah

Blast off up in the air
And we’ll fly fly fly,
 
We got stars in our pockets, where we go we rock it,
We got stars in our rockets oh yah
We got stars in our ___  ‘s show me how you rock it,
We’ve got stars in our ___ ‘s oh yah
 
And we rock, rock, and we rock rock,
And We’re rockin with our stars.
 
And we rock, rock, and we rock rock,
Star in my___ oh star!')

song3 = Song.create(name: "We're Going Somewhere", topic: 'adventure', lyrics: 'We’re going Up up up in my love ___ ,
Up in the clouds we’ll greet the ___ ,
Up up up we’ll dance and sway in my love ___ ,

Higher and higher we’re reaching for the sun,	
Higher and higher come on let’s have some fun,

We’re going Up up up in my love ___ ,
Up in the clouds we’ll greet the ___ ,
Up up up we’ll dance and sway in my love ___ ,

Higher and higher we’re reaching for the sun,	
Higher and higher come on lets have some fun,

Lala la loo, lala la loo love ___ ,
Lala la loo, lala la loo love ___ !', music: '')    

puts 'songy libs'

songylib1 = Songylib.create(name: 'Fill in the Blank I Got A', user_input: '', song_id: song1.id, user_id: user1.id)
songylib2 = Songylib.create(name: 'Fill up the Grand Muir Tree', user_input: '', song_id: song2.id, user_id: user1.id)
songylib3 = Songylib.create(name: 'Fill up the my Blank Love Boat', user_input: '', song_id: song3.id, user_id: user1.id)





##puts 'saved songs'