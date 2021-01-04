class CreateSongylibs < ActiveRecord::Migration[6.0]
  def change
    create_table :songylibs do |t|
      t.integer :user_id
      t.integer :song_id
      t.string :name
      t.string :user_input

      t.timestamps
    end
  end
end
