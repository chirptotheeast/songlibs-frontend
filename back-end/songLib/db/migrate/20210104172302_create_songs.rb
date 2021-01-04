class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :topic
      t.string :lyrics
      t.string :music

      t.timestamps
    end
  end
end
