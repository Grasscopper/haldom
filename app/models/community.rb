class Community < ApplicationRecord
  has_many :topics

  validates :name, presence: true, length: { minimum: 1, maximum: 200 }
  validates :description, presence: true, length: { minimum: 5, maximum: 1000 }
end
