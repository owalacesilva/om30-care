require 'rails_helper'

RSpec.describe 'Resident', type: :request do
  subject { response }

  describe "GET /towns/:slug/residents" do
    before { get town_residents_path(town_id: 1) }

    it { is_expected.to have_http_status(:success) }
    it { is_expected.to match_json_schema('residents') }
  end

  describe "GET /towns/:slug/residents/:id" do
    let(:town) { create(:town) }
    let(:resident) { create(:resident, town: town) }

    before { get "/towns/#{town.id}/residents/#{resident.id}" }

    it { is_expected.to have_http_status(:success) }
    it { is_expected.to match_json_schema('resident') }
  end

  describe "POST /towns/:slug/residents" do
    let(:town) { create(:town) }
    let(:params) { { resident: attributes_for(:resident) } }

    before { post town_residents_path(town_id: town.id), params: params }

    it { is_expected.to have_http_status(:created) }
    it { is_expected.to match_json_schema('resident') }
  end

  describe "PUT /towns/:slug/residents/:id" do
    let(:town) { create(:town) }
    let(:resident) { create(:resident, town: town) }
    let(:params) { { resident: attributes_for(:resident) } }

    before { put town_resident_path(town_id: town.id, id: resident.id), params: params }

    it { is_expected.to have_http_status(:ok) }
    it { is_expected.to match_json_schema('resident') }
  end
end
