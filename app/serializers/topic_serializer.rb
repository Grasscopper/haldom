class TopicSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :poster
  belongs_to :community
  belongs_to :user
end
