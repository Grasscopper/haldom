class Topic < ApplicationRecord
  belongs_to :community

  validates :name, presence: true, length: { minimum: 5, maximum: 200 }
  validates :description, presence: true, length: { minimum: 5, maximum: 40000 }
end
