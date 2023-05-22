require 'rails_helper'

RSpec.describe "Towns", type: :request do
  subject { response }

  describe "GET /index" do
    before { get towns_path }

    it { is_expected.to have_http_status(:success) }
    it { is_expected.to match_json_schema('towns') }
  end

  describe "GET /show/:id" do
    let(:town) { create(:town) }

    before { get "/towns/#{town.id}" }

    it { is_expected.to have_http_status(:success) }
    it { is_expected.to match_json_schema('town') }
  end

  describe "GET /create" do
    let(:params) { { town: attributes_for(:town) } }

    before { post towns_path, params: params }

    it { is_expected.to have_http_status(:created) }
    it { is_expected.to match_json_schema('town') }
  end

  describe "GET /update" do
    let(:town) { create(:town) }
    let(:params) { { town: attributes_for(:town) } }

    before { put "/towns/#{town.id}", params: params }

    it { is_expected.to have_http_status(:ok) }
    it { is_expected.to match_json_schema('town') }
  end
end
