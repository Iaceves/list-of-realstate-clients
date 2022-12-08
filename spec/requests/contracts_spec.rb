require 'rails_helper'

RSpec.describe "Contracts", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/contracts/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/contracts/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/contracts/show"
      expect(response).to have_http_status(:success)
    end
  end

end
