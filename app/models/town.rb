class Town < ApplicationRecord

  validates :display_name, presence: true
end
