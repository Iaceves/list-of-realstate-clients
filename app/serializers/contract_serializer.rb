class ContractSerializer < ActiveModel::Serializer
  attributes :id, :seller_id, :agent_id, :price
  belongs_to :agent
  belongs_to :seller
end
