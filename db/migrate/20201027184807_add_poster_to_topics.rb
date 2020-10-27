class AddPosterToTopics < ActiveRecord::Migration[5.2]
  def change
    add_column :topics, :poster, :string
  end
end
