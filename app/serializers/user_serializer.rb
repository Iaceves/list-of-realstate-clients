class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password
  belongs_to :agency
end
