class User < ApplicationRecord
    has_many :songylibs
    has_many :saved_songs
end
