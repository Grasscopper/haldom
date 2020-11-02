class Topic < ApplicationRecord
  belongs_to :community
  belongs_to :user

  validates :name, presence: true, length: { minimum: 1, maximum: 100 }
  validates :description, presence: true, length: { minimum: 1, maximum: 40000 }
end
