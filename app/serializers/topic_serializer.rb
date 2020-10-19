class TopicSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  belongs_to :community
end
