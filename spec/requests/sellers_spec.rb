require 'rails_helper'

RSpec.describe "Sellers", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/sellers/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/sellers/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/sellers/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/sellers/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/sellers/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
