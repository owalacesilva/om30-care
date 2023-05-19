class Resident < ApplicationRecord

  belongs_to :town, class_name: 'Town', optional: false 

  validates :full_name, presence: true
  validates :cpf, presence: true
  validates :cns, presence: true
  validates :email, presence: true, uniqueness: true
  validates :gender, presence: true

  #validates_with Validators::CpfDocumentValidator
end
