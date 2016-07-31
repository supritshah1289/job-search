class CreateSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :skills do |t|
      t.string :skill1
      t.string :skill2
      t.string :skill3
      t.string :skill4
      t.string :skill5
      t.string :skill6
      t.string :skill7
      t.string :skill8
      t.string :skill9
      t.string :skill10
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
