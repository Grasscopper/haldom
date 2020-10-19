class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.belongs_to :community

      t.timestamps null: false
    end
  end
end
