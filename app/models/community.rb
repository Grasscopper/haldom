class Community < ApplicationRecord
  has_many :topics

  validates :name, presence: true, length: { minimum: 1, maximum: 100 }
  validates :description, presence: true, length: { minimum: 1, maximum: 200 }
end
