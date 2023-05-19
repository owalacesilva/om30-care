class Town < ApplicationRecord

  has_many :resident, class_name: 'Resident', dependent: :destroy

  validates :display_name, presence: true
end
