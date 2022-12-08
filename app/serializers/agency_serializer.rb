class AgencySerializer < ActiveModel::Serializer
  attributes :id, :company_name, :address
  has_many :agents
  has_many :Users
  has_many :users
end
