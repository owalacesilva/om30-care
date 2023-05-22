class Town < ApplicationRecord

  has_many :residents, class_name: 'Resident', dependent: :destroy, autosave: true

  validates :display_name, presence: true
end
