class Address < ApplicationRecord

  belongs_to :resident, class_name: 'Resident', optional: false
end
