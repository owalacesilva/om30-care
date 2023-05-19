require 'rails_helper'

RSpec.describe Town, type: :model do
  context "when create an town" do
    subject(:town) { create(:town) }

    it "creates new town" do
      expect { town }.to change(described_class, :count).by(1)
    end
  end

  describe ".associations" do
    subject { build(:town) }
  
    # it { is_expected.to belong_to(:role).class_name("Role") }
  end

  describe ".validations" do
    subject { build(:town) }

    it { is_expected.to validate_presence_of(:display_name) }
  end
end
