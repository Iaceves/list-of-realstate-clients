class AgentWithSellerSerializer < ActiveModel::Serializer
  attributes :id, :name, :company, :license_number
  has_many :contracts
  has_many :sellers, through: :contracts
end
