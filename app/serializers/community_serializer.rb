class CommunitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image
  has_many :topics
end
