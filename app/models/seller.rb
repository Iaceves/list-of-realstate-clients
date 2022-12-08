class Seller < ApplicationRecord
    has_one :contract, dependent: :destroy
    has_one :agent, through: :contract
end