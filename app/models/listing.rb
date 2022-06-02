class Listing < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :address, presence: true
    validates :price, presence: true
end