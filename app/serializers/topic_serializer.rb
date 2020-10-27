class TopicSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :poster
  belongs_to :community
end
