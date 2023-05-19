require 'rails_helper'

RSpec.describe Address, type: :model do
  let(:resident) { create(:resident, town: create(:town)) }

  describe 'when create a address' do
    subject(:address) { create(:address, resident: resident) }


    it 'creates new address' do
      expect { address }.to change(described_class, :count).by(1)
    end
  end

  describe '.associations' do
    subject { build(:address, resident: resident) }

    it { is_expected.to belong_to(:resident).class_name('Resident') }
  end
end
