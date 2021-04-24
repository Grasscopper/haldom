class AddImageToCommunities < ActiveRecord::Migration[5.2]
  def change
    add_column :communities, :image, :string
  end
end
