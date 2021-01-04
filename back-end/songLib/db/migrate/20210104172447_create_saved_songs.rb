class CreateSavedSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_songs do |t|
      t.integer :userid
      t.string :name
      t.string :lyrics
      t.string :music

      t.timestamps
    end
  end
end
