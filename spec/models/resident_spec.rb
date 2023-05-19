require 'rails_helper'

RSpec.describe Resident, type: :model do
  let(:town) { create(:town) }

  describe 'when create a resident' do
    subject(:resident) { create(:resident, town: town) }


    it 'creates new resident' do
      expect { resident }.to change(described_class, :count).by(1)
    end
  end

  describe '.associations' do
    subject { build(:resident, town: town) }

    it { is_expected.to belong_to(:town).class_name("Town") }
  end

  describe '.validations' do
    subject { build(:resident, town: town) }

    it { is_expected.to validate_presence_of(:full_name) }
    it { is_expected.to validate_presence_of(:cpf) }
    it { is_expected.to validate_presence_of(:cns) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:gender) }
    it { is_expected.to validate_uniqueness_of(:email) }
  end
end
